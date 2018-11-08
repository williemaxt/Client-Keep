// this file is for the baseURL connecting to our backend
import axios from 'axios'

//creating a connection to our backend api
export default () => {
  return axios.create({
    baseURL: 'http://127.0.0.1:2000/'
  })
}
