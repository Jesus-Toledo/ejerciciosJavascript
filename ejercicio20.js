//Destructuring
let movie = {
    title: "Interstellar",
    year: 2014,
    rating: 10
};
let {title, year, rating} = movie
console.log(title);
console.log(year);
console.log(rating);


let country = {
    name: "Canada",
    capital: "Ottawa",
    population: 40
};

let{name, capital, population} = country;
console.log(name);
console.log(capital);

let developer = {
    name1: "Jesus",
    role: "Frontend Developer",
    englishLevel: "B1"
};

let {name1, role, englishLevel} = developer;
console.log(name1);
console.log(englishLevel);