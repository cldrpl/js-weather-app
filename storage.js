// creating storage so that it keeps your most recent searched weather location
// default locations are needed in case nothing is added

class Storage {
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Los Angeles';
        this.defaultCountry = 'USA';
    }

    // check if null, then set to default locations
     getLocationData() {
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country');
        }

        return {
            city: this.city,
            country: this.country
        }
     }

     // just saving strings so JSON parse or stringify are not needed
     setLocationData(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
     }
}