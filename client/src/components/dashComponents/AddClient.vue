<template>
  <div class="card">
    <div class="alert alert-danger" role="alert" v-show="errorPrompt">
      {{errorPrompt}}
    </div>
    <div class="alert alert-success" role="alert" v-show="prompt">
      Successfully Added Client
    </div>
<div class="card-body">
  <h5 class="card-title text-danger">Card title</h5>
  <form>
    <div class="form-group">
      <label for="clientName">Name</label>
      <input type="text" class="form-control" id="clientName" placeholder="Password" v-model="name">
    </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
  </div>
  <div class="form-group">
    <label for="clientPhone">Phone</label>
    <input type="number" class="form-control" id="clientPhone" placeholder="(123)-456-7890" v-model="number">
  </div>
  <div class="form-group">
    <label for="clientPhone">Details</label>
    <textarea type="text" class="form-control" id="clientPhone" placeholder="(123)-456-7890" v-model="details"></textarea>
  </div>
  <button type="submit" class="btn btn-danger" v-on:click="addClient">Add Client</button>
</form>
</div>
</div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'AddClient',
  props: ['userEmail'],
  data(){
    return{
      email: null,
      name: null,
      number: null,
      details: null,
      prompt: null,
      errorPrompt: null
    }
  },
  methods: {
    async addClient(){
      const response = await ApiService.createClient({
        userEmail: this.userEmail,
        name: this.name,
        email: this.email,
        number: this.number,
        details: this.details
      })

      if(response.data.message === 'success'){
        //emptying our fields
        this.name = null
        this.email = null
        this.number = null
        this.details = null
        // showing our prompt
        this.prompt = 'success'
        // TODO: close after 3 seconds
      } else {
        //// TODO: Fix Error Prompt Not Showing Up Check 'Network' log
        this.errorPrompt = 'Oops There Was a Problem'
      }
    }
  }
}
</script>

<style scoped>
</style>
