
document.getElementById("btn-next").addEventListener('click',surveyscore);
let survey13=0;
window.localStorage.setItem('survey13', survey13);


function surveyscore(){

if (document.getElementById('radio-1').checked) {
    survey13 = document.getElementById('radio-1').value;
    window.localStorage.setItem('survey13', survey13);
  }

  if (document.getElementById('radio-2').checked) {
    survey13 = document.getElementById('radio-2').value;
    window.localStorage.setItem('survey13', survey13);
  }

  if (document.getElementById('radio-3').checked) {
    survey13 = document.getElementById('radio-3').value;
    window.localStorage.setItem('survey13', survey13);
  }

  if (document.getElementById('radio-4').checked) {
    survey13 = document.getElementById('radio-4').value;
    window.localStorage.setItem('survey13', survey13);
  }

  if (document.getElementById('radio-5').checked) {
    survey13 = document.getElementById('radio-5').value;
    window.localStorage.setItem('survey13', survey13);
  }

 

 
}


