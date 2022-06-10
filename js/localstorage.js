function init() {
	
	var humidityscore = localStorage.getItem("weatherscore");
    var tempscore = localStorage.getItem("weatherscore2");
    var skinscore = localStorage.getItem("skinscore");
    var cosmetic = localStorage.getItem("cosmetic");

    var lastscore = parseFloat(humidityscore)+parseFloat(tempscore)+parseFloat(skinscore);
   




	//취득 데이터 출력
	document.querySelector("#result").innerHTML = lastscore;
    document.querySelector("#result2").innerHTML = cosmetic;

}