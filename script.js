// Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

var request = new XMLHttpRequest;
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
    var apiResult = JSON.parse(request.response);

    // Get all the countries from Asia continent /region using Filter function

    var countryFromAsiaConti = apiResult.filter((a) => a.continents[0] == "Asia");
    console.log("Get all the countries from Asia continent /region using Filter function");
    console.log(countryFromAsiaConti.map((b) => b.name.common));

    // Get all the countries with a population of less than 2 lakhs using Filter function

    var populationLessThan2L = apiResult.filter((a) => a.population < 200000);
    console.log("Get all the countries with a population of less than 2 lakhs using Filter function");
    console.log(populationLessThan2L.map((b) => b.name.common))

    // Print the following details name, capital, flag, using forEach function

    console.log("Print the following details name, capital, flag, using forEach function");
    apiResult.forEach(arrElement => {
        console.log(`name: ${arrElement.name.common}, Capital: ${arrElement.capital}, Flag: ${arrElement.flag}`)
    });

    // Print the total population of countries using reduce function

    var totalPopulation = apiResult.reduce((acc,cv) => acc+cv.population,0);
    console.log("Print the total population of countries using reduce function");
    console.log(`Total Population of countries ${totalPopulation}`);

    // Print the country that uses US dollars as currency.

    // var countryHaveDollars = apiResult.filter((a) => a.currencies.findKey());
    // console.log(countryHaveDollars);

}   