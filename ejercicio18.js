let countries = [
    "Mexico",
    "Canada",
    "Japan"
];

let newCountry = countries.map(countries => `Country: ${countries}`);
console.log(newCountry);    


let prices = [100, 200, 300];
let newPrice = prices.map(prices => prices + 10);
console.log(newPrice);



let names = [
    "Jesus",
    "Maria",
    "Luis"
];

let sayHi = names.map(names => `Hello ${names}`);
console.log(sayHi);