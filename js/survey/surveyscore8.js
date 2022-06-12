
document.getElementById("btn-next").addEventListener('click',surveyscore);
let survey8=0;
window.localStorage.setItem('survey8', survey8);


function surveyscore(){

if (document.getElementById('radio-1').checked) {
    survey8 = document.getElementById('radio-1').value;
    window.localStorage.setItem('survey8', survey8);
  }

  if (document.getElementById('radio-2').checked) {
    survey8 = document.getElementById('radio-2').value;
    window.localStorage.setItem('survey8', survey8);
  }

  if (document.getElementById('radio-3').checked) {
    survey8 = document.getElementById('radio-3').value;
    window.localStorage.setItem('survey8', survey8);
  }

  if (document.getElementById('radio-4').checked) {
    survey8 = document.getElementById('radio-4').value;
    window.localStorage.setItem('survey8', survey8);
  }

  if (document.getElementById('radio-5').checked) {
    survey8 = document.getElementById('radio-5').value;
    window.localStorage.setItem('survey8', survey8);
  }

 

 
}


