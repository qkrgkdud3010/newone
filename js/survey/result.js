

window.onload = function result(){

    var skintype = localStorage.getItem("skintype");
    var itemtype = localStorage.getItem("itemtype");
    var forecare = localStorage.getItem("forecare");
    var waterintensive = localStorage.getItem("waterintensive");
    var weakskin = localStorage.getItem("weakskin");

        document.querySelector("#usertype").innerHTML = skintype;
  
    
   
        document.querySelector("#recom1").innerHTML = itemtype;
  
    
   
        document.querySelector("#recom2").innerHTML = forecare;
   
    
   
        document.querySelector("#recom3").innerHTML = waterintensive;
 
    
   
        document.querySelector("#recom4").innerHTML = weakskin;
    
}





