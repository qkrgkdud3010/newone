function init() {
	
	var humidityscore = localStorage.getItem("weatherscore");
    var tempscore = localStorage.getItem("weatherscore2");
    var skinscore = localStorage.getItem("skinscore");
    var cosmetic = localStorage.getItem("cosmetic");

    var lastscore = parseFloat(humidityscore)+parseFloat(tempscore)+parseFloat(skinscore);
    var lackscore = 2 - lastscore;
    
    if(cosmetic == 'yes'){
        var solscore = lackscore / 4
    }
   
    if(cosmetic == 'no'){
        var solscore = lackscore / 3
    }




	//취득 데이터 출력
	document.querySelector("#result").innerHTML = lastscore.toFixed(1);
    document.querySelector("#result2").innerHTML = lackscore.toFixed(1);
    document.querySelector("#result3").innerHTML = cosmetic;
    document.querySelector("#result4").innerHTML = solscore.toFixed(2);
    document.querySelector("#result5").innerHTML = solscore.toFixed(2);
    document.querySelector("#result6").innerHTML = solscore.toFixed(2);

}