//-----------------------------Arrow Functions----------------------------------------
//Funcion tradicional
function greet(name) {
    return `Hello ${name}`;
}

//Arrow function
const greet = (name) => {
    return `Hello ${name}`;
};

//simplify arrow function
const greet = (name) => `Hello ${name}`;

//Usar cuando tenga varias lineas

const calculateSalary = (hours, rate) => {
    let total = hours * rate;
    return total;
};

//Ejercicios

function sayHello(name) {
    return `Hello ${name}`;
}

const sayHello = name => `Hello ${name}`



function multiply(a, b) {
    return a * b;
}

const multiply = (a, b) => a * b

let salaries = [1000, 2000, 3000];

let result = salaries.map(
    salaries => salaries + 500
);

console.log(result);

let names = ["Jesus", "Maria", "Luis"];

let greetings = names.map(
    names => `Hello ${names}`
);

console.log(greetings);


//1-El resultado es 2, 4, 6
//2- porque se le multiplica 2 a cada uno de los numeros

let numbers = [1, 2, 3];

let result = numbers.map(number => {
    number * 2;
});

console.log(result);
