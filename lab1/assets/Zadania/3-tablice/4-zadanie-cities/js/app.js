//Zadanie 1
console.log("Number of cities is equal to "+cities.length);
//Zadanie 2
let totalPopulation=0;
cities.forEach(element => {
    totalPopulation+=element.people;
});
console.log("Total population is equal to "+totalPopulation)
//Zadanie 3
let firstCityWithTenThousand = cities.find(c=>c.people>10000);
console.log(firstCityWithTenThousand);
//Zadanie 4 
let citiesWithMoreThanAvaragePopulation = cities.filter(c=>c.people>totalPopulation/cities.length);
citiesWithMoreThanAvaragePopulation.forEach(element => {
    console.log(element);
});
//Zadanie 5 
let citiesWithMoreThanTenThousand = cities.filter(c=>c.people>10000);
citiesWithMoreThanTenThousand.forEach(element => {
    console.log(element);
});
//Zadanie 6
if(citiesWithMoreThanTenThousand>cities.length/2){
    console.log("There is more cities with population over 10000 than under 10000")
}
else{
    console.log("There is less cities with population over 10000 than under 10000")

}


