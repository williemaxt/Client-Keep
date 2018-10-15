<template>
  <div class="container">
  <h1 class="display-2 text-danger">Client Keep</h1>
  <p class="text-muted">by 611 Solutions</p>
  <br>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <button type="submit" class="btn btn-danger">Login</button>
  <a href="#/Signup"><button type="submit" class="btn btn-light">Signup</button></a>
  <br>
  <br>
  <a href="#/Reset"><p class="text-muted text-center">Forgot Password?</p></a>
</form>
</div>
</template>

<script>
export default {
  name: 'Login',
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
