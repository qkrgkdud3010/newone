
document.getElementById("btn-next").addEventListener('click',surveyscore);
let survey6=0;
window.localStorage.setItem('survey6', survey6);


function surveyscore(){

if (document.getElementById('radio-1').checked) {
    survey6 = document.getElementById('radio-1').value;
    window.localStorage.setItem('survey6', survey6);
  }

  if (document.getElementById('radio-2').checked) {
    survey6 = document.getElementById('radio-2').value;
    window.localStorage.setItem('survey6', survey6);
  }

  if (document.getElementById('radio-3').checked) {
    survey6 = document.getElementById('radio-3').value;
    window.localStorage.setItem('survey6', survey6);
  }

  if (document.getElementById('radio-4').checked) {
    survey6 = document.getElementById('radio-4').value;
    window.localStorage.setItem('survey6', survey6);
  }

  if (document.getElementById('radio-5').checked) {
    survey6 = document.getElementById('radio-5').value;
    window.localStorage.setItem('survey6', survey6);
  }

 

 
}


