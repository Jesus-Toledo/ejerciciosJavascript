// some and every usados para validaciones
//some()- existe al menos uno que cumpla la condicion

let salaries = [1000, 2000, 5000];

let result = salaries.some(
    salary => salary > 4000
);

console.log(result);


let salaries = [1000, 2000, 3000];

let result = salaries.some(
    salary => salary > 4000
);

console.log(result);


//every() - todos cumplen la condicion

let salaries = [3000, 4000, 5000];

let result = salaries.every(
    salary => salary > 2000
);

console.log(result);

let salaries = [3000, 4000, 1000];

let result = salaries.every(
    salary => salary > 2000
);

console.log(result);

//Ejercicio 1 - true

//Ejercicio 2 - false

//Ejercicio 3 - true

//Ejercicio 4 - false

//Ejercicio 5 - some()

//Ejercicio 6 - every()

