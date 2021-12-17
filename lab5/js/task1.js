//json like data
let restaurant1 = {
    "restaurantName": "Bunny Handroll Sushi",
    "cuisines": [
        "Japanese",
        "Sushi",
    ],
    "address": {
        "street": "Grunwaldzka",
        "streetNumber": 22,
        "geoCoordinates": {
            "latitude": 54.44310204421788,
            "longitude": 18.57018360206525,
            "hemisphere": "north",
        }
    },
}

let restaurant2 = {
    "restaurantName": "Mandu",
    cuisines: [
        "American",
        "Burgers",
    ],
    "address": {
        "street": "Zygmuntowska",
        "streetNumber": 4,
        "geoCoordinates": {
            "latitude": 54.397931,
            "longitude": 18.5724962,
            "hemisphere": "north",
        }
    },
}
//Task 1.1
function getLatitudeAndStreetNumber() {
    let lasn = {
        streetNumber: restaurant1.address.streetNumber,
        latitude: restaurant1.address.geoCoordinates.latitude
    };
    return lasn //acronym for full function name
}

function calculateLatitudeAndStreetNumber(callback) {
    console.log(callback.streetNumber + callback.latitude)
}

calculateLatitudeAndStreetNumber(getLatitudeAndStreetNumber());

//Task 1.2
function getStreetAndHemisphere() {
    let sah = {
        street: restaurant2.address.street,
        hemisphere: restaurant2.address.geoCoordinates.hemisphere
    }
    return sah //acronym for full function name
}

function concatenateStreetAndHemisphere(callback) {
    console.log(`${callback.street} is in ${callback.hemisphere} hemisphere`);
}

concatenateStreetAndHemisphere(getStreetAndHemisphere());