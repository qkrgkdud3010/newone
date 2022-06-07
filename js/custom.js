
const API_KEY = 'f3e5f3bd0ed6a160508612f2a643403a';
 
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


      }); 
}
 
function onGeoError() {
   alert("Can't find you. No weather for you.");
}
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
