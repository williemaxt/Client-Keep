<template>
  <div class="container">
  <h1 class="display-4 text-danger">Signup</h1>
  <p class="text-muted">by 611 Solutions</p>
  <br>
  <div class="alert alert-danger" role="alert" v-show="prompt">
  {{prompt}}
  </div>
  <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model="name" aria-describedby="emailHelp" placeholder="Enter Name">
    </div>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" id="email" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="InputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-danger" v-on:click="register">Signup</button>
  <button type="submit" class="btn btn-light">Login</button>
  <br>
  <br>
  <a href="#/Reset"><p class="text-muted text-center">Forgot Password?</p></a>
</form>
</div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'Signup',
  data () {
    return {
      name: null,
      email: null,
      password: null,
      prompt: null
    }
  },
  methods: {
    async register(){
   console.log('Register button was clicked')
   if(this.email == null || this.password == null || this.name == null){
     this.prompt = 'Please check all fields'
     console.log('the form was not valid')
   } else {
     console.log('the form was valid')
     //establish the function call as a constant
     const response = await ApiService.register({
       email: this.email,
       password: this.password,
       name: this.name
     })
     console.log(response.data)
     // clearing the fields
     this.email = null
     this.password = null
     this.name = null
   }
 }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container{
  margin-top:15vh;
  max-width: 500px;
  font-family: 'K2D', sans-serif;
}
h1{

}
/*font-family: 'K2D', sans-serif;
font-family: 'Poiret One', cursive;*/
</style>
