//Ejemplo 1
let employees = [
    { name: "Jesus", salary: 2500 },
    { name: "Maria", salary: 4000 }
];

let names = employees.map(
    employee => employee.name
);

console.log(names);


//
function getNames(employees) {
    return employees.map(
        employee => employee.name
    );
}
let result = getNames(employees);
console.log(result);

//Ejemplo 2 obtener salarios
function getSalaries(employees) {
    return employees.map(
        employee => employee.salary
    );
}

//Ejemplo 2 Filtrar empleados
function getHighSalaryEmployees(employees) {
    return employees.filter(
        employee => employee.salary > 3000
    );
}

let result = getHighSalaryEmployees(employees);

//Ejemplo 3
let movies = [
    {
        title: "Interstellar",
        rating: 10
    },
    {
        title: "Titanic",
        rating: 8
    },
    {
        title: "Avatar",
        rating: 7
    }
];

function getMovieTitles(movies) {
    return movies.map(
        movie => movie.title
    );
}

//-------------Ejercicios---------------------
let employees = [
    {
        name: "Jesus",
        role: "Frontend Developer",
        salary: 2500
    },
    {
        name: "Maria",
        role: "Data Analyst",
        salary: 4000
    },
    {
        name: "Luis",
        role: "Backend Developer",
        salary: 3500
    }
];

//Ejercicio 1
 function getEmployeeNames(employees) {
    return employees.map(
        employee => employee.name
    );
 }

 let result = getEmployeeNames(employees);
 console.log(result);

 //Ejercicio 2
 function getEmployeeRoles(employees) {
    return employees.map(
        employee => employee.role
    );
 }

 let result =getEmployeeRoles(employees);
 console.log(result);

 //Ejercicio 3
 function getHighSalaryEmployees(employees) {
        return employees.filter(
            employees => employees.salary > 3000
        );
 }

 //Ejercicio 4 
 function findEmployeeByName(employees, name) {
    return employees.find(
        employees => employees.name === name
    );
 }

 findEmployeeByName(employees, "Maria");

 //Ejercicio 5
 //Pensaria en el metodo filter para filtrar por salrio 
 //pensaria en .map