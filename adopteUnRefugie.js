function converTemp(deg) { return Math.round(deg -  273.15); }

function errorMessage(message){
	if (!message)
		message = "Erreur";

	console.log(message);
	window.alert(message);
}


function search() {

	var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  var apiId = "&APPID=fd0d9b2950b515677aa81096225742fc";
	var searchValue = document.getElementById("searchInput").value;

	// On appelle le service pour récupérer les données du lieu rechercher

	var xhr = new XMLHttpRequest();
	xhr.open("GET", apiUrl + searchValue + apiId, true);
	xhr.error = errorMessage;
	xhr.onreadystatechange = function() {
		 if(xhr.readyState == 4) {
		 	if  (xhr.status==200)
				showData(JSON.parse(xhr.responseText));
		else
			errorMessage('Erreur lors de la récupération des données');
		 }
		return xhr.readyState;
	};

	xhr.send();
	return false;
}

function showData(data){


	if (data &&
		(!data.cod || data.cod == 200)) { //On vérifie que l'on a bien récupéré les données

		//if(wrapper){} il semble que ça sert à rien?

		var wrapper = document.getElementById("wrapper");

		var myDiv = document.createElement('aside');
    	myDiv.classList.add("myDiv");
    	wrapper.appendChild(myDiv);

		var city = document.createElement("h3");
		var cityText = document.createTextNode(data.name);
		city.appendChild(cityText);
		myDiv.appendChild(city);

		var img = document.createElement("img");
		img.setAttribute("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
		myDiv.appendChild(img);


		var temp = document.createElement("p");
		temp.appendChild(document.createTextNode("Temp | " + converTemp(data.main.temp) + "°C, "));
		myDiv.appendChild(temp);


		var humidity = document.createElement("p");
		humidity.appendChild(document.createTextNode("Humidity | " + data.main.humidity + " %"));
		myDiv.appendChild(humidity);


		var pressure = document.createElement("p");
		pressure.appendChild(document.createTextNode("Pressure | " + data.main.pressure +" hPa"));
		myDiv.appendChild(pressure);


		var wind = document.createElement("p");
		wind.appendChild(document.createTextNode("Wind  | " + data.wind.speed + " Km/H"));
		myDiv.appendChild(wind);

		var ixe = document.createElement("span");
		//myDiv.classList.add("myDiv"); déjà mis
		ixe.appendChild(document.createTextNode("X"));
		myDiv.appendChild(ixe);
		ixe.addEventListener("click", close);


	} else {
		errorMessage("The city you entered wasn't found.");
	}

}

function close(e){
	e.target.parentNode.remove();
}


// Quand le boutton search est poussé, la fonction search est lancée
function bindEvents(){
	document.getElementById('searchButton').addEventListener("click", search);
	document.getElementById("searchInput").addEventListener("keydown", searchStart)
}

function searchStart(e){
	if (e.keyCode == 13) {
        search();
    }
}

// Debut
function start() {
	window.alert("ca marche aussi avec entree");
	console.log("Start"); //Affiche start sur la console
	bindEvents();
};

// Pour eviter que search se lance tout de suite
window.addEventListener("load", start);
