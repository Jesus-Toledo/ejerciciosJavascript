//filter / quiero varios
let resultado = array.filter(
    item => condición
);

let developers = employees.filter(
    employee => employee.department === "Developer"
);
//find / quiero uno
let resultado = array.find(
    item => condición
);
let employee = employees.find(
    employee => employee.name === "Maria"
);
//map / quiero transformar
let nuevoArray = array.map(
    item => transformación
);
let greetings = names.map(
    name => `Hello ${name}`
);
//forEach / quiero recorrer y solo quiero mostrar datos // se usa for cuando requieres control de esos datos, como encontrar datos especificos
array.forEach(item => {
    console.log(item);
});
employees.forEach(employee => {
    console.log(employee.name);
});
//includes / quiero saber si existe
array.includes(valor)
countries.includes("Canada")

let colors = ["green", "blue", "red", "yellow"];
console.log(colors.includes("yellow"));
//Destructuring / quiero sacar propiedades
let employee = {
    name: "Jesus",
    role: "Developer"
};
let { name, role } = employee;