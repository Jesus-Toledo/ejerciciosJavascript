//Reduce - cuando quieres convertir varios números en uno solo (suma)

//Ejercicio 1
let numbers = [1, 2, 3];

let result = numbers.reduce(
    (accumulator, number) => accumulator + number,
    0
);

console.log(result);

//Ejercicio 2
let numbers1 = [10, 20, 30];

let result1 = numbers1.reduce(
    (accumulator, number) => accumulator + number,
    0
);

console.log(result1);

//Ejercicio 3

let salaries = [1000, 2000, 3000];

let totalSalary = salaries.reduce(
    (accumulator, salary) => accumulator + salary,
    0
);

console.log(totalSalary);


//Ejercicio 4
let cpu = [20, 30, 50];

let totalCpu = cpu.reduce(
    (accumulator, cpu) => accumulator + cpu,
    0
);

console.log(totalCpu);

//Ejercicio 5 - primero pensaria en reduce