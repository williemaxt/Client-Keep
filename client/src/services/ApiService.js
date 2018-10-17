import Api from '@/services/Api'

//exporting this object that has a register method
export default {
  register(credentials){
    return Api().post('register', credentials)
  },
  login(credentials){
    return Api().post('login', credentials)
  }
}

// an example of how to call this method from another file
/*
ApiService.register({
  email: 'testing@gmail.com',
  password '123456789'
})
*/
