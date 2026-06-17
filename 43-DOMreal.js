//Ejercicios en el DOM real

let countries = [
    "Mexico",
    "Canada",
    "Japan"
];

let htmla = countries
    .map(country => `<li>${country}</li>`)
    .join("");

document.getElementById("countries").innerHTML = htmla;

//ejercicio 1
let title = document.getElementById("title");

title.textContent = "Frontend Developer";

//ejercicio 2 innerHTML
let app = document.getElementById("app");

app.innerHTML = "<h2>Hello World</h2>";


//ejemplo NOC
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

let html = alarms
    .map(
        alarm =>
        `<p>Alarm ${alarm.id} - ${alarm.severity}</p>`
    )
    .join("");

document.getElementById("alarms").innerHTML = html;

//Ejercicio 1
let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

let htmle = skills
    .map(skill => `<li>${skill}</li>`)
    .join("");

document.getElementById("skills").innerHTML = htmle;

//Ejercicio 2
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

let result = employees
    .map(employee => `<li>${employee.name} - ${employee.role}</li>`)
    .join("");

    document.getElementById("employees").innerHTML = result;

//Ejercicio 3
let courses = [
    "JavaScript",
    "React",
    "Node.js"
];

let cursos = courses
    .map(course => `<li>${course}</li>`)
    .join("");
document.getElementById("courses").innerHTML = cursos;

//pregunta teorica = textcontent todo lo que pongas se muestra como contenido normal y innerHTML lo toma como código y solo muestra el contenido real.