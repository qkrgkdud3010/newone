
document.getElementById("btn-next").addEventListener('click',surveyscore);
let survey2=0;
window.localStorage.setItem('survey2', survey2);


function surveyscore(){

if (document.getElementById('radio-1').checked) {
    survey2 = document.getElementById('radio-1').value;
    window.localStorage.setItem('survey2', survey2);
  }

  if (document.getElementById('radio-2').checked) {
    survey2 = document.getElementById('radio-2').value;
    window.localStorage.setItem('survey2', survey2);
  }

  if (document.getElementById('radio-3').checked) {
    survey2 = document.getElementById('radio-3').value;
    window.localStorage.setItem('survey2', survey2);
  }

  if (document.getElementById('radio-4').checked) {
    survey2 = document.getElementById('radio-4').value;
    window.localStorage.setItem('survey2', survey2);
  }

  if (document.getElementById('radio-5').checked) {
    survey2 = document.getElementById('radio-5').value;
    window.localStorage.setItem('survey2', survey2);
  }

 

 
}


