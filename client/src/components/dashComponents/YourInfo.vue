<template>
  <div class="card" v-on:click="getInfo">
    <div class="card-body">
      <h5 class="card-title">Your Info</h5>
      <h6 class="card-subtitle mb-2 text-muted">This Is You</h6>
      <p class="card-text text-danger">{{name}}</p>
      <p class="card-text text-danger">{{userEmail}}</p>
      <p class="card-text text-danger">{{number}}</p>
    </div>
  </div>
</template>

<script>
import ApiService from '@/services/ApiService'
export default {
  name: 'YourInfo',
  props: ['userEmail'],
  data(){
    return{
      number: null,
      name: null
    }
  },
  methods: {
    async getInfo(){
      const response = await ApiService.getInfo({
        email: this.userEmail
      })
      console.log('response is: '+response.data.name)
      this.number = response.data.number // getting number from server
      this.name = response.data.name // getting name from server
    }
  }
}
</script>

<style scoped>
</style>
