let numbers = [1, 2, 3];
multiply = numbers.map((number) => number * 2);
console.log(multiply);

let names = ["Jesús", "Dayessi", "Maria"];
sayHi = names.map(names => console.log(`Hello ${names}`));
console.log(sayHi);

let prices = [10, 20, 30];
suma = prices.map((prices) => prices + 10);
console.log(suma);

let bands = [ "Coldplay", "Keane", "Nativo Show"];
favoriteBand = bands.map(bands => console.log(`My favorite band is ${bands}`));
console.log(favoriteBand);

//Ejercicio A   

let cities = ["Guadalajara", "Toronto", "Vancouver"];
visitCity = cities.map(cities => console.log(`I want to visit ${cities}`));
console.log(visitCity);

//Ejercicio B

let salaries = [1000, 2000, 3000];
newSalary = salaries.map((salaries) => salaries + 500);
console.log(newSalary);
