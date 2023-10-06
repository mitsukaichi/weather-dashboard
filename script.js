/*
requestURL = http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=d850a0d7831752d40804f26cf5642a15
*/

// Make an API call upon user's clicking search button

$(function () {
    $(".btn").on("click",function(event){
        event.preventDefault();
        var buttonClicked = $(event.target);
        var inputCityName = buttonClicked.siblings().eq(0).children().eq(1).children().val();
        var requestURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + inputCityName + "&limit=1&appid=d850a0d7831752d40804f26cf5642a15"
        fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            cityName = data[0].name + ", " + data[0].state;
            latitude = data[0].lat;
            longitude = data[0].lon;
            getWeatherData(latitude,longitude, cityName);  
        });
        
    });
});

// TO DO: Handle the case where the input is empty or there is no matching city name

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
        $("#current_humid").text("Wind speed: " + data.current.humidity + " %"); 
        for (i = 1; i < 6; i++) {
            var date = dayjs.unix(data.daily[i].dt).format("M_DD")
            $("#future_weather").append('<ul id = "' + date + '" class = "list-group-item">' + dayjs.unix(data.daily[i].dt).format("M/DD") + "</ul>");
            var dateId = "#" + date;
            $(dateId).append('<li class = "list-group-item">Temp: ' + data.daily[i].temp.day + " °F</li>");
            $(dateId).append('<li class = "list-group-item">Wind Speed: ' + data.daily[i].wind_speed + " MPH");
            $(dateId).append('<li class = "list-group-item">Humidity: '  + data.daily[i].humidity + "  %");
        }; 
    });
}