//datos y HTML unirlos
let employees1 = [
    {
        name: "Jesus",
        role: "Frontend"
    },
    {
        name: "Maria",
        role: "Backend"
    },
    {
        name: "Luis",
        role: "Data Analyst"
    }
];

let html = employees1.map(
    employee =>
        `<li>${employee.name} - ${employee.role}</li>`
);

console.log(html);

//Unirlo
let html1 = employees1
    .map(
        employee =>
        `<li>${employee.name} - ${employee.role}</li>`
    )
    .join("");

console.log(html1);


//Ejemplo 2

let names = ["React", "JavaScript", "CSS"];

console.log(names.join(" | "));

//reto 1
let countries = [
    "Mexico",
    "Canada",
    "Japan"
];

let result = countries
    .map(country => `<li>${country}</li>`)
    .join("");

console.log(result);


//reto 2
let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

let result1 = skills
    .map(skill => `<li>${skill}</li>`)
    .join("");

console.log(result1);

//reto 3
let employees = [
    {
        name: "Jesus",
        role: "Frontend"
    },
    {
        name: "Maria",
        role: "Backend"
    }
];

let resultado = employees
    .map( employee => `<div>${employee.name} - ${employee.role}</div>`)
    .join("");

    console.log(resultado);

//reto 4
let alarms = [
    {
        id: 1,
        severity: "High"
    },
    {
        id: 2,
        severity: "Low"
    }
];

let alarmas = alarms
    .map(alarm => `<tr><td>${alarm.id}</td><td>${alarm.severity}</td></tr>`)
    .join("");

    console.log(alarmas);

//reto 5  .map().join()