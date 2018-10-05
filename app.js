// Init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);

// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

const city = document.getElementById('city').value;
const country = document.getElementById('country').value;

// Change location, avoiding hard coding from testing
weather.changeLocation(city, country);

// Set location in Local Storage
storage.setLocationData(city, country);

// Get and display weather
getWeather();

// close modal, req using jQuery to close it out
 $('#locModal').modal('hide');
});


// promise return since getWeather is async
function getWeather() {
    weather.getWeather() 
      .then(results => {
        ui.paint(results);
    })
    .catch(err => console.log(err));
}