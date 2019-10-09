class Adapter {
  static hasToken = () => !!Adapter.getToken()

  static getToken = () => localStorage.getItem('token')
  
  static removeToken = () => localStorage.removeItem('token')

  static logout = () => Adapter.removeToken()

  static setToken = (token) => localStorage.setItem('token', token)

  static setLocation = () => {
    localStorage.setItem('location')
  }
}

export default Adapter;