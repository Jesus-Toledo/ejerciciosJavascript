let number = [1, 2, 3, 4, 5];
let numbers = number.find(number => number === 3);
console.log(numbers);

let countries =["México", "Canadá", "USA"];
let country = countries.find(countries => countries === "Canadá");
console.log(country);

let employees = [
    {},
    {
        name: "Jesús",
        age: 38
    },
    {
        name: "Dayessi",
        age: 25
    },
    {
        name: "Maria",
        age: 30
    }
];

let employee = employees.find(employees => employees.name === "Dayessi");
console.log(employee);

let age = employees.find(employees => employees.age === 38);
console.log(age);


//Ejercicio A

let movies = [
    {
        title: "El señor de los anillos",
        year: 2001
    },
    {
        title: "American pie",
        year: 2005
    },
    {
        title: "La vida es bella",
        year: 1997
    }
];

let movie = movies.find(movie  => movie.year === 2001);
console.log(movie); 


//Ejercicio B

let phones = [
    {
        brand: "Honor",
        model: "14lite"
    },
    {
        brand: "Apple",
        model: "Iphone 12"
    },
    {
        brand: "Samsung",
        model: "S20"
    }
];

let phone = phones.find(phones => phones.brand === "Samsung");
console.log(phone);