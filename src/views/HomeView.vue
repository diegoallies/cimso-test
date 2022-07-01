<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';
export default {
  components: {
 
  },
  data(){
    return{
     payload:null
    }
  },
  
  mounted(){ 
    axios.get('https://apitest.cimsoweb.com/api/innterchange/get_booking_units_request')
    .then(res => {
      this.payload = res.data
      let bookings= "Booking Unit ID"
      console.log(this.payload["Booking Units"])
    })
    .catch(err => {
      console.error(err); 
    })
}
}
</script>
