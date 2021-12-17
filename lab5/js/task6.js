
axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(function (res) {
        lat = res.data.address.geo.lat;
        userId = res.data.id;
        email = res.data.email;
        username = res.data.username;
        
        //task1
        subtract(parseFloat(lat), userId)

        //task2
        createNewObject(email, username);

    })
    .catch(function (err) {
        console.log("error" + err);
    })
    .then(function () {
        console.log("Task 6 finished");
    });

    function subtract(firstNumber, secondNumber) {
        console.log(firstNumber - secondNumber);
    }
    
    function createNewObject(firstData, secondData) {
        let newObject = {
            email: firstData,
            body: secondData
        }
        console.log(newObject);
    }