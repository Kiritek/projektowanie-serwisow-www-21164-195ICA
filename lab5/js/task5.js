fetch("https://jsonplaceholder.typicode.com/comments/5")
    .then(response => response.json())
    .then(comData => {
        commentId = comData.postId;
        userId = comData.id;
        email = comData.email;
        body = comData.body;
    })
    .catch(function (err) {
        console.error(err)
    })
    .finally(function () {

        //task1
        subtract(commentId, userId)

        //task2
        createNewObject(email, body);
    })

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