
document.getElementById("submit").addEventListener('click',test);


const API_KEY = 'f3e5f3bd0ed6a160508612f2a643403a';
 
let humidity = 0;
let temp = 0;
let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
var listVar;
var listVar2;
let type1 = "oil";
let type2 = "balance";
let type3 = "dry";
let type4= "yes";
let type5 = "no";

function onGeoOk(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
 
   // console.log(`You live in ${latitude} and ${longitude}`);
 
   fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
   )
      .then((response) => response.json())
      .then((data) =>{
        const tempcontainer = document.querySelector("#weather span:first-child")
        const humcontainer = document.querySelector("#weather span:last-child")
        humcontainer.innerText = data.main.humidity;
        tempcontainer.innerText = data.main.temp;

      let humidity = data.main.humidity;
      let temp = data.main.temp;
        

      if (humidity > 90){
         let score1=0.5;
         console.log(score1);
      }

      if (humidity > 80 && humidity <=90){
           let score1=0.4;
           console.log(score1);
      }

      if (humidity > 60 && humidity <=80){
         let score1=0.3;
         console.log(score1);
      }

      if (humidity > 40 && humidity <=60){
         let score1=0.2;
         console.log(score1);
      }

      if (humidity > 20 && humidity <=40){
         let score1=0.1;
         console.log(score1);
      }

      if (humidity > 0 && humidity <=20){
         let score1=0;
         console.log(score1);
      }

      if (temp > 30){
         let score2=0.5;
         console.log(score2);
      }

      if (temp > 20 && temp <30){
           let score2=0.4;
           console.log(score2);
      }

      if (temp > 10 && temp <20){
         let score2=0.3;
         console.log(score2);
      }

      if (temp > 0 && temp <10){
         let score2=0.2;
         console.log(score2);
      }

      if (temp > -10 && temp <0){
         let score2=0.1;
         console.log(score2);
      }

      if (temp < -10 ){
         let score2=0;
         console.log(score2);
      }

      


      }); 
}
 
function onGeoError() {
   alert("GPS를 켜십시오.");
}

function test() {
   if (document.getElementById('radio-1').checked) {
         listVar = document.getElementById('radio-1').value;
       }
   
       if (document.getElementById('radio-2').checked) {
         listVar = document.getElementById('radio-2').value;
       }
   
       if (document.getElementById('radio-3').checked) {
         listVar = document.getElementById('radio-3').value;
       }

       if (document.getElementById('radio-4').checked) {
         listVar2 = document.getElementById('radio-4').value;
       }


       if (document.getElementById('radio-5').checked) {
         listVar2 = document.getElementById('radio-5').value;
       }



      if(listVar == type1){
         let score3 = 0.5;
         console.log(score3);
      }

      if(listVar == type2){
         let score3 = 0.25;
         console.log(score3);
      }

      if(listVar == type3){
         let score3 = 0;
         console.log(score3);
      }

      if(listVar2 == type4 ){
         console.log("유");
      }

      if(listVar2 == type5 ){
         console.log("무");
      }

   }


 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
