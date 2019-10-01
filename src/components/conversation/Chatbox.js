import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'
import Message from '../messages/Message';
import { createMessage, messageReceived } from '../../actions/message'
// import { getConversation } from '../../actions/conversation'
import { ActionCableConsumer } from 'react-actioncable-provider'

class Chatbox extends Component {
  state = {
    text: ''
  }

  // componentDidMount() {
  //   this.props.currentConvo && this.props.getConversation(this.props.currentConvo.id)
  // }

  handleChange = e => this.setState({[e.target.name]: e.target.value})

  handleSubmit = e => {
    e.preventDefault()

    this.props.createMessage(this.state.text, this.props.currentConvo.id)
    this.setState({text: ''})
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Chatbox
        
        {
          this.props.currentConvo && (
          <ActionCableConsumer
            // frontend channel connects to the NAME OF THE CHANNEL CLASS
            // can add params through ex
            // {{channel: 'classname', params: paramsValue(example of user ) }}
            channel={{ channel: 'MessageChannel', conversation_id: this.props.currentConvo.id}}
            onReceived={(arg) => {
              console.log('msg received', arg)

              this.props.messageReceived(arg)
              // this.props.createMessage(arg)
            }}
          />)
        }
        <h1>
          {
            this.props.currentConvo && this.props.currentConvo.title
          }
        </h1>

        {
          this.props.messages && this.props.messages.map(message => {
            return <Message key={uuid()} {...message} />
          })
        }
        

        <br/>
        <br/>
        Type Message box
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange} />
        </form>


        <div>
          Users in Chatroom
          {
            this.props.currentConvo && this.props.currentConvo.users.map(user => {
              return <div key={`user-${user.id}`}>{user.username}</div>
            })
          }
        </div>
        <div>
          Users NOT in chatroom - click to invite
          {
            this.props.currentConvo && this.props.users.filter(user => {
              return !this.props.currentConvo.users.map(u=>u.id).includes(user.id)
            }).map(user => {
              return <div key={user.id} onClick={()=>console.log('invite user funcitonality')}>{user.username}</div>
            })
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  console.log(state)
  return {
    currentConvo: state.conversations.current && state.conversations.all.find(convo => convo.id === state.conversations.current),
    messages: state.conversations.current && state.conversations.all.find(convo => convo.id === state.conversations.current).messages,
    users: state.users
  }
}

export default connect(mapStateToProps, { createMessage, messageReceived })(Chatbox)