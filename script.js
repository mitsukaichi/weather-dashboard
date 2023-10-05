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
            cityName = data[0].name;
            stateName = data[0].state;
            latitude = data[0].lat;
            longitude = data[0].lon;
            getWeatherData(latitude,longitude, cityName);  
        });
        
    });
});

function getWeatherData (lat, lon, city){
    var requestURL = "https://api.openweathermap.org/data/3.0/onecall?lat=" + lat + "&lon=" + lon + "&cnt=6&appid=d850a0d7831752d40804f26cf5642a15"
    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(requestURL);
        console.log(data);
        console.log(city);
        $(".location_name").text(city);  
    });
}