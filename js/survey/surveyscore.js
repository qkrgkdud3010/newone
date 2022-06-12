
document.getElementById("btn-next").addEventListener('click',surveyscore);
let survey=0;
window.localStorage.setItem('survey', survey);


function surveyscore(){

if (document.getElementById('radio-1').checked) {
    survey = document.getElementById('radio-1').value;
    window.localStorage.setItem('survey', survey);
  }

  if (document.getElementById('radio-2').checked) {
    survey = document.getElementById('radio-2').value;
    window.localStorage.setItem('survey', survey);
  }

  if (document.getElementById('radio-3').checked) {
    survey = document.getElementById('radio-3').value;
    window.localStorage.setItem('survey', survey);
  }

  if (document.getElementById('radio-4').checked) {
    survey = document.getElementById('radio-4').value;
    window.localStorage.setItem('survey', survey);
  }

  if (document.getElementById('radio-5').checked) {
    survey = document.getElementById('radio-5').value;
    window.localStorage.setItem('survey', survey);
  }

 

 
}


