import Api from '@/services/Api'

//exporting this object that has a register method
export default {
  register(credentials){
    return Api().post('register', credentials)
  },
  login(credentials){
    return Api().post('login', credentials)
  },
  getInfo(credentials){
    return Api().post('getInfo', credentials)
  },
  createClient(credentials){
    return Api().post('createClient', credentials)
  },
  getClients(credentials){
    return Api().post('getClients', credentials)
  },
  deleteClients(credentials){
    return Api().post('deleteClients', credentials)
  }
}

// an example of how to call this method from another file
/*
ApiService.register({
  email: 'testing@gmail.com',
  password '123456789'
})
*/
