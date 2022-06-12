document.getElementById("btn-next").addEventListener('click',lastscore);



var scoresum = 0;
var surveyscore1 = localStorage.getItem("survey");
var surveyscore2 = localStorage.getItem("survey2");
var surveyscore3 = localStorage.getItem("survey3");
var surveyscore4 = localStorage.getItem("survey4");
var surveyscore5 = localStorage.getItem("survey5");
var surveyscore6 = localStorage.getItem("survey6");
var surveyscore7 = localStorage.getItem("survey7");
var surveyscore8 = localStorage.getItem("survey8");
var surveyscore9 = localStorage.getItem("survey9");
var surveyscore10 = localStorage.getItem("survey10");
var surveyscore11 = localStorage.getItem("survey11");
var surveyscore12 = localStorage.getItem("survey12");
var surveyscore13 = localStorage.getItem("survey13");
var forecare = null;
var waterintensive =null;
var weakskin = null;





function lastscore(){

    var scoresum;
    var waterscoresum;
    
    scoresum = parseInt(surveyscore1) + parseInt(surveyscore2) + 
    parseInt(surveyscore3)+parseInt(surveyscore4)+parseInt(surveyscore5)+
    parseInt(surveyscore6)+parseInt(surveyscore7)+parseInt(surveyscore8)+
    parseInt(surveyscore9)+parseInt(surveyscore10)+parseInt(surveyscore11)+
    parseInt(surveyscore12)+parseInt(surveyscore13);

    waterscoresum = parseInt(surveyscore11)+
    parseInt(surveyscore12);

    
    window.localStorage.setItem('waterscoresum', waterscoresum);
    window.localStorage.setItem('scoresum', scoresum);

    if(scoresum < 59)  {		

		var skintype = "건성";
        var itemtype = "건성 피부 타입용";
        window.localStorage.setItem('skintype', skintype);
        window.localStorage.setItem('itemtype', itemtype);


	}

	if(scoresum < 81) {

		var skintype = "복합성";
        var itemtype = "복합성 피부 타입용";
        window.localStorage.setItem('skintype', skintype);
        window.localStorage.setItem('itemtype', itemtype);

	}

	if(scoresum > 81) {
        var skintype = "지성";
		var itemtype = "지성 피부 타입용";

		window.localStorage.setItem('skintype', skintype);
        window.localStorage.setItem('itemtype', itemtype);

		if(parseInt(surveyscore7) > 7)  {

			var forecare = "포어 케어";
            window.localStorage.setItem('forecare', forecare);

		}


	}

		

		if(waterscoresum > 7) {
            var waterintensive = "수분 인텐시브";
            window.localStorage.setItem('waterintensive ', waterintensive);
        }
				

		if(surveyscore13 > 0) {
            var weakskin = "민감성 피부 타입용";
			window.localStorage.setItem('weakskin ', weakskin);

		}		

	}

	



