class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.maxTemp = document.getElementById('w-maxtemp');
        this.pressure = document.getElementById('w-pressure');
        this.wind = document.getElementById('w-wind');
    }


    // painting into the UI, I looked up .toFixed() aws a solution to make sure the temp is listed as a while number, easy way w/out converting to Math
    // added country so that it displays on the page
    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp.toFixed() + "°F";
        // this one gave me problems finding the icon, on the site they pull it from a widget
        // I'm not able to find the correct URL location that they use for the icons
        // this.icon.setAttribute('src', `https://openweathermap.org/img/w${weather.weather[0].icon}.png`)
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.maxTemp.textContent = `Maximum Tempature: ${weather.main.temp_max.toFixed()}°F`;
        this.pressure.textContent = `Pressure Level: ${weather.main.pressure} hpa`;
        this.wind.textContent = `Wind: ${weather.wind.speed} miles/hour`;

    }
}