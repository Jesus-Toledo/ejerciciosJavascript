// ------spread operator : toma todos los elementos que esten dentro y expandelos

//example 1 -Arrays
let countries = ["Mexico", "Canada"];
console.log(...countries);
console.log("Mexico", "Canada");

//example 2 - crear un nuevo array
let countries = ["Mexico", "Canada"];

let newCountries = [
    ...countries,
    "Japan"
];

console.log(newCountries);

[
    "Mexico",
    "Canada",
    "Japan"
]

//example 3 -Unir arrays
let frontend = ["HTML", "CSS"];
let javascript = ["JavaScript"];

let skills = [
    ...frontend,
    ...javascript
];

console.log(skills);
[
    "HTML",
    "CSS",
    "JavaScript"
]

//example 4 -spread con objetos crea una copia
let employee = {
    name: "Jesus",
    role: "Frontend Developer"
};

let newEmployee = {
    ...employee
};
{
    name: "Jesus",
    role: "Frontend Developer"
}

//example 5 modificar una propiedad
let updatedEmployee = {
    ...employee,
    role: "Senior Frontend Developer"
};

{
    name: "Jesus",
    role: "Senior Frontend Developer"
}

//-------------------ejercicios--------------

//1 - imprime [1, 2, 3]

//2 - imprime ["USA", "Mexico","Canada"]

//3
let bands = [
    "Coldplay",
    "Keane"
];

let newBands = [
    ...bands, "Muse"
];

console.log(newBands);

//4 - imprime ["HTML","CSS","JavaScript"]

//5- imprime  updateEmployee = { name: "Jesus", role: "Senior Developer"};

//6 - completa 
let phone = {
    brand: "Apple",
    model: "iPhone 12"
};

let updatedPhone = {
    ...phone, model: "iphone 15"
};

console.log(updatedPhone);

// 7 - imprime  copy = {name: "Maria", salary: 4000};

//8
let frontend = [
    "HTML",
    "CSS"
];

let backend = [
    "Node.js"
];

let stack = [
    ...frontend,
    ...backend
];

console.log(stack);

//9 - imprime updateUser = {name: "Jesus", city "Toronto"};

//10 - La diferencia es que push() modifica  y spread operator crea una copia del array u objeto