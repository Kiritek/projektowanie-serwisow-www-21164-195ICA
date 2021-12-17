let Url = "https://jsonplaceholder.typicode.com/users/2";

let xmlhttprequest = new XMLHttpRequest;


xmlhttprequest.open("GET", Url);
xmlhttprequest.responseType = "json";
xmlhttprequest.send();
xmlhttprequest.onload = function () {
    let jsonObj = xmlhttprequest.response;

    lat = jsonObj.address.geo.lat;
    userId = jsonObj.id;
    email = jsonObj.email;
    username = jsonObj.username;

    //task1
    divide(parseFloat(lat),userId)

    //task2
    createNewObject(email,username);
};
xmlhttprequest.onerror = function () {
    console.log("XHR error");
}

function divide(firstNumber, secondNumber) {
    console.log(firstNumber / secondNumber);
}

function createNewObject(firstData, secondData) {
    let newObject = {
        email: firstData,
        username: secondData
    }
    console.log(newObject);
}
