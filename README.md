# weather-dashboard

## About this project

This project was done as the sixth assignment of a codind bootcamp as part of the process to learn about javascript and third party APIs. I built a webpage that meets the following criteria from scratch:

- When user search for a city, presented with current and future conditions for that city and that city is added to the search history
- When user view current weather conditions for that city, show the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
- When user view future weather conditions for that city, it shows a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
- When user click on a city in the search history, it shows current and future conditions for that city

## Installation

- Deployed URL: https://mitsukaichi.github.io/weather-dashboard/
- [Screenshot](https://github.com/mitsukaichi/weather-dashboard/assets/45612744/322dcb65-f4fc-47b9-a239-b292f33fd664)

## Things I learnt from this challenge

1. You should check the DOM tree of your page in the browser when there's something wrong with the styling. I spend sometime figuring out why the elements in the nav bar are not displayed in the way I expected. I was only checking the CSS of those elements but the root cause was that that element was not properly nested in the DOM tree as it's supposed to be, instead of the CSS issue.

2. Callback function is critical when handling server side API. Even with the difference of milliseconds, the browser will execute the javascript with whatever the value assigned to each variable at that time, and data that are only available after it gets the response back from the API won't be available when the browser loads the javascript unless you don't call that function back after the API response.

3. It's always a good idea to throughly read the documentations. I initially thought the API that returns the longitude and latitude and weather icons are something I need to rely on the library different from the parimary server side API I was using (Weather API), but after reading through the documentations, those supplimental data are also provided by the same platform / included within the API response.

## License

MIT License

Copyright (c) [2023] [Minami Mukai]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.