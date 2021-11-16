//Zadanie 1
users.forEach(element => {
    console.log(element.name+" -> "+element.email)
});
//Zadanie 2
let matureUsers;
matureUsers= users.filter(element=>element.age>=18);
console.log(matureUsers)
//Zadanie 3 
let femaleUsers;
femaleUsers= users.filter(element=>element.gender ==="female")
console.log(femaleUsers);
//Zadanie 4 
let dolorUsers
dolorUsers= users.filter(element=> element.tags.some(t=>t==="dolor")==true
);
console.log(dolorUsers);
//Zadanie 5
console.log(users.every(element=>element>=18));
//Zadanie 6
console.log(users.some(element=> element.age>=18));
//Zadanie 7

let usersWithCapitalLetters = users.map(element=> element.name.toUpperCase());
console.log(usersWithCapitalLetters);

//Zadanie 8
if(femaleUsers.length>users/2){
    console.log("There is more woman than man");
}
else{
    console.log("There is less woman than man");

}