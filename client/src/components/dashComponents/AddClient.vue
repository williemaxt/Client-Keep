<template>
  <div class="card">
<div class="card-body">
  <h5 class="card-title text-danger">Card title</h5>
  <form>
    <div class="form-group">
      <label for="clientName">Name</label>
      <input type="text" class="form-control" id="clientName" placeholder="Password">
    </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="clientPhone">Phone</label>
    <input type="number" class="form-control" id="clientPhone" placeholder="(123)-456-7890">
  </div>
  <div class="form-group">
    <label for="clientPhone">Details</label>
    <textarea type="text" class="form-control" id="clientPhone" placeholder="(123)-456-7890"></textarea>
  </div>
  <button type="submit" class="btn btn-danger">Add Client</button>
</form>
</div>
</div>
</template>

<script>
export default {
  name: 'AddClient',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
</style>
