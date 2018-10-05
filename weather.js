class Weather {
    constructor(city, country) {
        this.apiKey = '8b9015c44052a5cbf4c0287e4eafffc1';
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API, listing in Imperial for °F and to avoid calculations
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.country}&appid=${this.apiKey}&units=imperial`)

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }

}