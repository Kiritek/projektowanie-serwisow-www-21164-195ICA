//Zadanie 1
totalPopulation = 0;
countries.forEach(element => {
    console.log(element.name);
    totalPopulation += element.population;
});
console.log("Total Earth population "+totalPopulation);

//Zadanie 2
console.log("Avarage population per country "+totalPopulation / countries.length)

//Zadanie 3 & 4
let numberOfCountriesWithPositiveGrowth = 0;
let numberOfCountriesWithNegativeGrowth = 0;
countries.forEach(element => {
    if (element.net_change > 0) {
        numberOfCountriesWithPositiveGrowth++;
    }
    else if (element.net_change < 0) {
        numberOfCountriesWithNegativeGrowth++;
    }
    

});
    console.log("Number of counties with positive growth " + numberOfCountriesWithPositiveGrowth)
    console.log("Number of counties with negative growth " + numberOfCountriesWithNegativeGrowth)
//Zadanie 5
let countriesLandPercentage=0;
countries.forEach(element => {
    countriesLandPercentage+= element.world_area_in_percent;
});
console.log("All countries consist of "+countriesLandPercentage+"% Earth land");
//Zadanie 6
let avarageFertilityRate = 0;
let countriesWithFertilityData = countries.length;
countries.forEach(element => {
    if(element.fertility_rate !=null){
        avarageFertilityRate+=element.fertility_rate;
    }
    else{
        countriesWithFertilityData--;
    }
});
console.log("Avarage fertility rate is equal to "+ avarageFertilityRate/countriesWithFertilityData);
//Zadanie 7
let countryAge=0;
countries.forEach(element => {
    countryAge+= element.medium_age * element.population;
});
console.log("Avarage age is equal to "+  countryAge/totalPopulation);
//Zadanie 8
let poland = countries.find(el=>el.name==="Poland");
console.log(poland);
//Zadanie 9 
if(poland.medium_age>countryAge/totalPopulation){
    console.log("Population of Poland is older than world population");
}
else{
    console.log("Population of Poland is younger than world population");
}
