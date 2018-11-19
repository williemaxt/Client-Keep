<template>
<div class="card">
<div class="card-body">
  <h5 class="card-title text-danger">All Your Clients</h5>
  <div class="list-group">
<a href="#" v-for="client in clientsList" class="list-group-item list-group-item-action flex-column align-items-start" key: = 'client.email'>
  <div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">{{client.name}}</h5>
    <small>{{client.number}}</small>
  </div>
  <p class="mb-1">{{client.email}}</p>
  <p class="mb-1">{{client.details}}</p>
  <button class="btn btn-outline-danger" v-on:click="deleteClients(client.email)">Delete</button>
  <button class="btn btn-outline-warning" v-on:click="updateClients(client.email)">Update</button>
  <small>Donec id elit non mi porta.</small>
</a>
</div>
</div>
</div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'Clients',
  props: ['userEmail'],
  data(){
    return{
      //data goes here
      clientsList:[] // list where clients will be stored
    }
  },
  async mounted(){
    const response = await ApiService.getClients({
      userEmail: this.userEmail
    });
    console.log("your emails is: "+this.userEmail)
    //storing our response in a variable
    var info = response.data;
    //loop index
    var i = 0;
    // looping through the data in our info variable
    for(var id in info){
      console.log(JSON.stringify(info))
      //push the information to the list
      this.clientsList.push({
        name: info[i].name,
        email: info[i].email,
        number: info[i].number,
        details: info[i].details
      });
      i += 1;
    }
    //setting cookie for total contacts
    this.$cookies.set('total', i)
  },
  methods: {
  async  deleteClients(email){
      //add request here
      const confirmation = await ApiService.deleteClients({
        userEmail: this.userEmail,
        email: email
      });
      if(confirmation.data === 'success'){
        //reload component
        alert('Yay it worked')
      }
      else {
        alert('there was a problem performing this action')
      }
    },
    updateClients(){
      //logic for updating clients
    }
  }
}
</script>

<style scoped>
.list-group-item{
  border: none;
}
.list-group{
  height: 55vh;
  overflow-y: scroll;
}
</style>
