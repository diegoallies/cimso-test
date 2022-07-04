<template>
<div v-if="payload">
    <div v-for="data in payload" :key="data">
      <div v-for="payload in data" :key="payload">
              <div class="container">
                <div class="row">
                  <div id=col class="col" v-for="payloads in payload" :key="payloads">
                   <div class="card" style="width: 18rem;">
                      <div class="card-body">
                         <h5 class="card-title">Cimso</h5>
                         <span class="line"></span>
                          <div class="card-text">      
                              <p> Booking Unit Id:</p> <p> {{payloads["Booking Unit ID"]}}</p>
                              <p> Booking Unit Number:</p> <p> {{payloads["Booking Unit Number"]}}</p>
                              <p> Booking Unit Name:</p> <p> {{payloads["Booking Unit Name"]}}</p>
                              <p> Booking Unit Id:</p> <p> {{payloads["Booking Unit ID"]}}</p>
                          </div>
                      </div>
                   </div>
                  </div>
                </div>
              </div>
      </div>
  </div>
      <footer>
        <div id="feets" class="container">
            <div class="row align-items-start">
              <div class="col">
                  <h4>Bookings</h4> 
                  <p>Lorem ipsum dolor sit .</p>   
                  <p>Lorem ipsum dolor sit .</p>   
                  <p>Lorem ipsum dolor sit .</p>   
              </div>
              <div class="col">
                  <h4>Services</h4> 
                  <p>Being innovative.</p>   
                  <p>Being creative.</p>   
                  <p>Being amazing.</p>   
              </div>
              <div class="col">
                  <h4>Contact</h4>   
                  <p>email@gmail.com</p>   
                  <p>123 345 6789</p>   
                  <p>Cape Town, South Africa</p>   
              </div>
            </div>
        </div>
      </footer>
</div>
 <div v-else>
  <h1>
    Loading...
  </h1>
    <div class="loader">
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
        <span class="loader-block"></span>
    </div>
 </div>

</template>
<script>
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
<style scoped>
  /*------------- the rest------------ */
  #feets{
    padding-top: 20px;
  }
/*------------- Card------------ */
#col{
  padding-bottom:20px;
}
.card-title{
  color: #2d2764;
  font-weight:bold;
}
span{
  width: 10px;
  height:5px;
}
/*------------- Footer------------ */
footer{
  background-color: #2d2764;
  color: rgba(255, 255, 255, 0.923);
  height:200px;
  bottom:0;
}
/*------------- loader------------ */
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 7.33333em;
  height: 7.33333em;
  margin-left: -3.66667em;
  margin-top: -3.66667em;
}
.loader-block {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  opacity: 0;
  width: 2em;
  height: 2em;
  background: #2d2764;
  -webkit-animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;
  animation: show 0.88s step-end infinite alternate, pulse 0.88s linear infinite alternate;
}
.loader-block:nth-child(1) {
  -moz-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
  -webkit-animation-delay: 0.065s;
  animation-delay: 0.065s;
}
.loader-block:nth-child(2) {
  -moz-transform: translate(2.66667em, 0);
  -ms-transform: translate(2.66667em, 0);
  -webkit-transform: translate(2.66667em, 0);
  transform: translate(2.66667em, 0);
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}
.loader-block:nth-child(3) {
  -moz-transform: translate(5.33333em, 0);
  -ms-transform: translate(5.33333em, 0);
  -webkit-transform: translate(5.33333em, 0);
  transform: translate(5.33333em, 0);
  -webkit-animation-delay: 0.195s;
  animation-delay: 0.195s;
}
.loader-block:nth-child(4) {
  -moz-transform: translate(0, 2.66667em);
  -ms-transform: translate(0, 2.66667em);
  -webkit-transform: translate(0, 2.66667em);
  transform: translate(0, 2.66667em);
  -webkit-animation-delay: 0.325s;
  animation-delay: 0.325s;
}
.loader-block:nth-child(5) {
  -moz-transform: translate(2.66667em, 2.66667em);
  -ms-transform: translate(2.66667em, 2.66667em);
  -webkit-transform: translate(2.66667em, 2.66667em);
  transform: translate(2.66667em, 2.66667em);
  -webkit-animation-delay: 0.13s;
  animation-delay: 0.13s;
}
.loader-block:nth-child(6) {
  -moz-transform: translate(5.33333em, 2.66667em);
  -ms-transform: translate(5.33333em, 2.66667em);
  -webkit-transform: translate(5.33333em, 2.66667em);
  transform: translate(5.33333em, 2.66667em);
  -webkit-animation-delay: 0.455s;
  animation-delay: 0.455s;
}
.loader-block:nth-child(7) {
  -moz-transform: translate(0, 5.33333em);
  -ms-transform: translate(0, 5.33333em);
  -webkit-transform: translate(0, 5.33333em);
  transform: translate(0, 5.33333em);
  -webkit-animation-delay: 0.39s;
  animation-delay: 0.39s;
}
.loader-block:nth-child(8) {
  -moz-transform: translate(2.66667em, 5.33333em);
  -ms-transform: translate(2.66667em, 5.33333em);
  -webkit-transform: translate(2.66667em, 5.33333em);
  transform: translate(2.66667em, 5.33333em);
  -webkit-animation-delay: 0.26s;
  animation-delay: 0.26s;
}
.loader-block:nth-child(9) {
  -moz-transform: translate(5.33333em, 5.33333em);
  -ms-transform: translate(5.33333em, 5.33333em);
  -webkit-transform: translate(5.33333em, 5.33333em);
  transform: translate(5.33333em, 5.33333em);
}

@-webkit-keyframes pulse {
  from,
  40% {
    background: #2d2764;
  }
  to {
    background: #dadada;
  }
}
@-webkit-keyframes show {
  from, 40% {
    opacity: 0;
  }
  41%, to {
    opacity: 1;
  }
}
@keyframes pulse {
  from,
  40% {
    background: #2d2764;
  }
  to {
    background: #dadada;  
  }
}
@keyframes show {
  from, 40% {
    opacity: 0;
  }
  41%, to {
    opacity: 1;
  }
}
/* Body styling */
html,
body {
  height: 100%;
}

body {
  background: #999 url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9ImNpcmNsZSIgY3k9ImZhcnRoZXN0LXNpZGUiIHI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiMzMzMzMzMiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxMTExMTEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyYWQpIiAvPjwvc3ZnPiA=');  
  background: #999 -moz-radial-gradient(circle farthest-side, #333333, #111111);
  background: #999 -webkit-radial-gradient(circle farthest-side, #333333, #111111);
  background: #999 radial-gradient(circle farthest-side, #333333, #111111);
}

</style>