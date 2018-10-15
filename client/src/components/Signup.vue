<template>
  <div class="container">
  <h1 class="display-4 text-danger">Signup</h1>
  <p class="text-muted">by 611 Solutions</p>
  <br>
  <form>
    <div class="form-group">
      <label for="InputName">Name</label>
      <input type="text" class="form-control" id="InputName" aria-describedby="emailHelp" placeholder="Enter Name">
    </div>
  <div class="form-group">
    <label for="InputEmail">Email address</label>
    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="InputPassword1">Password</label>
    <input type="password" class="form-control" id="InputPassword" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="InputPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="ConfirmPassword" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-danger">Login</button>
  <button type="submit" class="btn btn-light">Signup</button>
  <br>
  <br>
  <a href="#/Reset"><p class="text-muted text-center">Forgot Password?</p></a>
</form>
</div>
</template>

<script>
export default {
  name: 'Signup',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
