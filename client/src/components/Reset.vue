<template>
  <div class="container">
  <h1 class="display-4 text-danger">Reset Password</h1>
  <br>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll send you an email with a magic link to reset your password</small>
  </div>
  <button type="submit" class="btn btn-danger">Send Email</button>
  <br>
  <br>
  <a href="#/"><p class="text-muted text-center">Return To Login</p></a>
</form>
</div>
</template>

<script>
export default {
  name: 'Reset',
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
