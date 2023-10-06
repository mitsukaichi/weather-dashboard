/*
requestURL = http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=d850a0d7831752d40804f26cf5642a15
*/

// Make an API call upon user's clicking search button

$(function () {
    $(".btn").on("click",function(event){
        event.preventDefault();
        var buttonClicked = $(event.target);
        var inputCityName = buttonClicked.siblings().eq(0).children().eq(1).children().val();
        buttonClicked.siblings().eq(0).children().eq(1).children().val("");
        if (!inputCityName) {
            alert("Please enter the city name")
        } else {
        getLatLong (inputCityName);
        };
    });
});

// TO DO: Handle the case where the input is empty or there is no matching city name

function getLatLong (cityName) {
    var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=d850a0d7831752d40804f26cf5642a15";
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.length === 0) {
                alert("Couldn't find a city with that name. Please try different city.")
            } else {
                cityName = data[0].name + ", " + data[0].state;
                latitude = data[0].lat;
                longitude = data[0].lon;
                getWeatherData(latitude,longitude, cityName);  
            }
        });
}

function getWeatherData (lat, lon, city){
    var requestURL = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&cnt=6&units=imperial&appid=d850a0d7831752d40804f26cf5642a15"
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var tempIconUrl = '<img src="https://openweathermap.org/img/wn/' + data.current.weather[0].icon + '.png" id = "weather_icon">'
        var currentDate = dayjs.unix(data.current.dt).format("M/DD/YYYY");
        $(".location_name").text(city + " " + currentDate);
        $("#weather_icon").html(tempIconUrl);
        $("#current_temp").text("Tempreature: " + data.current.temp + " °F");
        $("#current_wind").text("Wind speed: " + data.current.wind_speed + " MPH");
        $("#current_humid").text("Humidity: " + data.current.humidity + " %"); 
        // Remove elements from the previous search
        $(".card-header").remove();
        $(".card-content").remove();
        for (i = 1; i < 6; i++) {
            var date = dayjs.unix(data.daily[i].dt).format("M/DD/YYYY")
            var sectionId = "#cd-" + i;
            var listId = "list-" + i;
            var listIdRef = "#" + listId;
            $(sectionId).append('<h3 class = "card-header">' + date + '</h3>');
            $(sectionId).append('<ul class = "list-group list-group-flush card-content" id = "'+ listId + '"></ul>');
            $(listIdRef).append('<li class = "list-group-item"> <img src="https://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '.png" style="width: 3rem;"> </li>');
            $(listIdRef).append('<li class = "list-group-item">Temp: ' + data.daily[i].temp.day + " °F</li>");
            $(listIdRef).append('<li class = "list-group-item">Wind Speed: ' + data.daily[i].wind_speed + " MPH");
            $(listIdRef).append('<li class = "list-group-item">Humidity: '  + data.daily[i].humidity + "  %");
        }; 
    });
}