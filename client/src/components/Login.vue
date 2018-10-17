<template>
  <div class="container">
  <h1 class="display-2 text-danger">Client Keep</h1>
  <p class="text-muted">by 611 Solutions</p>
  <br>
  <div class="alert alert-danger" role="alert" v-show="prompt">
  {{prompt}}
  </div>
  <form>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" v-model="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-danger" v-on:click="login">Login</button>
  <a href="#/Signup"><button type="submit" class="btn btn-light" v-on:click="getCookie">Signup</button></a>
  <br>
  <br>
  <a href="#/Reset"><p class="text-muted text-center">Forgot Password?</p></a>
</form>
</div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'Login',
  data () {
    return {
      prompt: '',
      email: null,
      password: null
    }
  },
  methods: {
    setCookie(){ //this function is for testing
      this.$cookies.set('email', 'williemaxt@gmail.com')
      console.log('The cookie has been set')
    },
    getCookie(){ //this function is for testing
    var cookie = this.$cookies.get('email')
    console.log('this is the cookie: '+ cookie)
    },
    async login(){
      console.log('Register button was clicked')
      if(this.email == null || this.password == null){
        this.prompt = 'Please check all fields'
        console.log('the form was not valid')
      } else {
        console.log('the form was valid')
        //establish the function call as a constant
        // await can only be used ina an async function
        const response = await ApiService.login({
          email: this.email,
          password: this.password
        })
        const userEmail = response.data.email
        console.log('response is: '+userEmail)
        //redirecting to dashboard page
        if (this.email == userEmail){
          this.$router.push({name: 'Dashboard', params:{email: this.email}});
        } else {
          this.prompt = 'Login Failed'
        }
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
