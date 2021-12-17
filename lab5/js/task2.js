//task 2.1
fetch("https://jsonplaceholder.typicode.com/users/3")
    .then(response => response.json())
    .then(userData => {
        lat = userData.address.geo.lat;
        lng = userData.address.geo.lng;
        isDataDifferent(lat, lng);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log("Task 2.1 finished"))

function isDataDifferent(firstData, secondData) {
    return new Promise((resolve, reject) => {
        if (firstData != secondData) {
            resolve(sum(firstData, secondData));
        }
        else {
            reject("Trying to add same data");
        }
    })
}
function sum(firstData, secondData) {
    console.log(parseFloat(firstData) + parseFloat(secondData));
}

//task 2.2

fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then(response => response.json())
    .then(postData => {
        title = postData.title;
        body = postData.body;
        isDataDifferentNewObject(title, body);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => console.log("Task 2.2 finished"))

function isDataDifferentNewObject(title, body) {
    return new Promise((resolve, reject) => {
        if (title != body) {
            resolve(createNewObject(title, body));
        }
        else {
            reject("Trying to add same data");
        }
    })
}
function createNewObject(title, body) {
    let object = {
        objectTitle: title,
        objectBody: body
    }
    console.log(object);
}