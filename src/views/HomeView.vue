<template>

<div v-for="units in completeData" :key="units['Booking Unit ID']" >

<div class="row">
  <div class="col-8 uniter">

<h1>
  Unit Type Info
</h1> 

<p> Unit Type Id : {{units["Unit Type ID"]}}</p>
<p> Unit Type Code : {{units["Unit Type Code"]}} </p>
<p> Unit Type Description : {{units["Unit Type Description"]}} </p>
<p> Unit Type Category : {{units["Unit Type Category"]}} </p>
<p> Max Occupants : {{units["Maximum Occupants"]}} </p>
<p> Max Adults : {{units["Maximum Adults"]}} </p>
<p> Max Children : {{units["Maximum Children"]}} </p>
<p> Marketing Description : {{units["Marketing Description"]}} </p>
<p> Location Id : {{units["Location ID"]}} </p>
<p> Unit Count : {{units["Unit Count"]}} </p>
<p> Unit Type Image UIDs : {{units["Unit Type Image UIDs"]}} </p>


  </div>
  <div class="col-4 booker">

<h1>
  Booking Unit Info
</h1>

<p> Booking Unit ID : {{units["Booking Unit ID"]}} </p>
<p> Booking Unit Name : {{units["Booking Unit Name"]}} </p>
<p> Booking Unit Number : {{units["Booking Unit Number"]}} </p>
<p> Unit Type ID : {{units["Unit Type ID"]}} </p>



</div>



<div class="divider" ></div>
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
     completeData: []
    }
  },
  
mounted(){

let one =
  "https://apitest.cimsoweb.com/api/innterchange/unit_type_info_request";
let two =
  "https://apitest.cimsoweb.com/api/innterchange/get_booking_units_request";


const requestOne = axios.get(one);
const requestTwo = axios.get(two);

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];


      const units = responseOne.data.payload["Unit Types"]    
      const bookings = responseTwo.data.payload["Booking Units"]

      console.log(units);
      console.log(bookings);

      this.completeData = bookings.map(booking => {
        const unitType = units.find(unit => unit["Unit Type ID"] === booking['Unit Type ID'])
        return {...booking, ...unitType}
      })

      console.log(completeData)
      // use/access the results
      this.unit_type = responseOne.data.payload["Unit Types"]    
      this.unit_type2 = responseTwo.data.payload["Booking Units"]
      this.unit_type_1_test = responseOne.data.payload["Unit Type ID"]
      this.unit_type_2_test = responseTwo.data.payload["Unit Type ID"]

      console.log(responseTwo.data.payload["Booking Units"]);
  

    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  }); 
}
}
</script>

<style scoped>

.booker {
  width: 25%;
  height: 30%;
  padding: 10px;
  border: 5px ridge gray;
  margin: 0;
  background-color: white;
}

.uniter {
  width: 45%;
  height: 60%;
  padding: 10px;
  border: 5px ridge gray;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 10%;
  background-color: white;
}

h1 {
  color: black;
}

.divider {
  border-bottom: 5px double grey;
  margin-top: -55%;
  margin-bottom: 5%;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
}


</style>>
