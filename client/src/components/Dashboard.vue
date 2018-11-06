<template>
  <div class="container" id="body-container">
    <div class="row">
  <div class="col">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Total Contacts</h5>
    <h6 class="card-subtitle mb-2 text-muted">So Far</h6>
    <h1 class="card-text text-center display-3 text-danger">15</h1>
  </div>
</div>
  </div>
  <div class="col">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Last Added</h5>
    <h6 class="card-subtitle mb-2 text-muted">The Last Person You Added</h6>
    <h1 class="card-text text-danger">Michael Johnson</h1>
    <p class="text-danger">(215)-824-5998</p>
  </div>
</div>
  </div>
  <div class="col">
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
  </div>
  <div class="col">
    <!--Component for Your Info-->
    <YourInfo :userEmail="userEmail"/>
  </div>
</div>
<div class="row">
  <div class="col-8">
    <!--Component for showing clients-->
    <Clients :userEmail="userEmail"/>
  </div>
  <div class="col-4">
    <!--Component for adding clients-->
    <AddClient :userEmail="userEmail"/>
  </div>
</div>
  </div>
</template>

<script>
import AddClient from '@/components/dashComponents/AddClient'
import Clients from '@/components/dashComponents/Clients'
import YourInfo from '@/components/dashComponents/YourInfo'
export default {
  name: 'Dashboard',
  data(){
    return{
      //put data here
      userEmail: this.$cookies.get('email')
    }
  },
  components: {
    AddClient,
    Clients,
    YourInfo
  },
}
</script>

<style scoped>
  .container{
    max-width: 1800px;
    font-family: 'K2D', sans-serif;
    background: radial-gradient(#ff0000, #fff);
  }
  .card{
    margin-top:30px;
    border: none;
    box-shadow: 0 0 20px #888;
    min-height: 200px;
  }
</style>
