let url = "https://jsonplaceholder.typicode.com/comments/5"

async function getAsync(url) {
    let res = await fetch(url);
    if (res.ok) {
        let comment = await res.json();
        commentId = comment.postId;
        userId = comment.id;
        email = comment.email;
        body = comment.body;

        //Task1
        multiply(userId, commentId);

        //Task2
        createNewObject(email, body)
    }
}

function multiply(firstNumber, secondNumber) {
    console.log(firstNumber * secondNumber);
}

function createNewObject(firstData, secondData) {
    let newObject = {
        email: firstData,
        body: secondData
    }
    console.log(newObject);
}

getAsync(url);