let employees = [
    {
        id: 1,
        name: "Jesus",
        role: "Frontend",
        salary: 2500
    },
    {
        id: 2,
        name: "Maria",
        role: "Backend",
        salary: 5000
    },
    {
        id: 3,
        name: "Luis",
        role: "Frontend",
        salary: 4000
    },
    {
        id: 4,
        name: "Ana",
        role: "Frontend",
        salary: 6000
    }
];

//reto 1- Obtén únicamente los nombres de los Frontend Developers.

let names = employees
    .filter(employee => employee.role === "Frontend")
    .map(employee => employee.name);

    console.log(names);


//reto 2 - Obtén únicamente los nombres de los empleados que ganan más de 3000.

let salaries = employees
    .filter( employee => employee.salary > 3000)
    .map(employee => employee.name);

console.log(salaries);


//reto 3 - Obtén los nombres de los Frontend Developers ordenados por salario de mayor a menor.

let nameSalary = employees
    .filter(employee => employee.role === "Frontend")
    .sort((a, b) => b.salary - a.salary)
    .map(employee => employee.name);

console.log(nameSalary);

//reto 4 - ¿Existe algún Frontend Developer con salario mayor a 5000?

let result = employees  
    .filter(employee => employee.role === "Frontend")
    .some(employee => employee.salary > 5000);

console.log(result);

//reto 5 - ¿Todos los Frontend Developers ganan más de 2000?

let result1 = employees  
    .filter(employee => employee.role === "Frontend")
    .every(employee => employee.salary > 2000);

console.log(result1);


//reto 6 - Quiero obtener únicamente los nombres de los empleados que ganan más de 3000 y luego ordenarlos alfabéticamente.
//filter -> map -> sort
/**
 * filter nos ayuda a encontrar primero los empleados que ganan mas de 3000
 * Luego Map para obtener los nombres de esos empleados
 * y sort pára ordenarlos alfabeticamente
 */