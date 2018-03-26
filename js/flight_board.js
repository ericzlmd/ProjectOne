//
//Author  : Richard Dip
//Date    : 02/27/2018
//Details : Flight Board with 6 elements refreshing every 10 seconds
//		    Clicking on the section alerts() information 
//

window.onload=init;

function init(){
	
	populate();
	
	setInterval(function(){
		populate();
	},10000);
		
	
	$("section").click(function(){
		goToBooking(this.id);
	})

	
}

function goToBooking(i){

	var dest = document.getElementById("destination"+i).innerHTML;
	var date = document.getElementById("date"+i).innerHTML;
	var time = document.getElementById("time"+i).innerHTML;
	var cost = document.getElementById("points"+i).innerHTML;
	
	var  confirm_window = confirm("Confirmation\n\n"+ dest + "\n" + date + "\n" + time + "\n" + cost);
	
	
	//this block of code would send to server for flight_confirmation to fetch
	if(confirm_window == true)
		window.location.href = "flight_confirmation.html";
	else
		alert("lol bruh");
	
	
	
}


function populate(){
	
	for(i=0;i<7;i++)
	{
		
		getDestination(i);
		getDate(i);
		getTime(i);
		getPoints(i);
	
	}
}

function getDestination(i){
	
	var num = Math.floor(Math.random()*20) + 0;
	var destination = document.getElementById("destination"+i);
	
	var cities = [	"Toronto, Canada", "New York, United States", "Lisbon, Portugal", "Venice, Italy", "Cairo, Egypt", 
					"Perth, Australia", "Paris, France", "Hong Kong, China", "Kingston, Jamaica", 
					"England, United Kingdom", "Stockholm, Sweden", "Cancun, Mexico", "Seoul, South Korea", 
					"Anthens, Greece", "Hanoi, Vietnam", "Helsinki, Finland", "Vancouver, Canada", "Bangkok, Thailand", 
					"Tokyo, Japan", "Sao Paulo, Brazil", ];
	
	
	destination.innerHTML = "Destination: "+cities[num];
			
	
	
}

function getDate(i){
	var num = Math.floor(Math.random()*3) + 1;
	var date = document.getElementById("date"+i);
	
	var month = Math.floor(Math.random()*12) + 1;
	var day = Math.floor(Math.random()*30) + 1;
	var year = Math.floor(Math.random()*3) + 18;
	

	date.innerHTML = "Departure Date: " + month + "/" + day + "/20" + year; 
		
	
}

function getTime(i){
	var num = Math.floor(Math.random()*3) + 1;
	var time = document.getElementById("time"+i);
	
	var hour = Math.floor(Math.random()*23) + 1;
	
	time.innerHTML = "Departure Time: " + hour + ":00";
	
}

function getPoints(i){
	var num = Math.floor(Math.random()*3) + 1;
	var points = document.getElementById("points"+i);
	var x = Math.floor(Math.random()*5000) + 100;
	
	var cost = Math.round(x/100)*100;
	
	points.innerHTML = "Cost: " + cost + " pts";
}
