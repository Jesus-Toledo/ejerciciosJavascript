//Ejercicios en el DOM real

let countries = [
    "Mexico",
    "Canada",
    "Japan"
];

let html = countries
    .map(country => `<li>${country}</li>`)
    .join("");

document.getElementById("countries").innerHTML = html;