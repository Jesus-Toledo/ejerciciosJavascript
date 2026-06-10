//filter / quiero varios elementos que cumplen una condicion
let resultado = array.filter(
    item => condición
);

let developers = employees.filter(
    employee => employee.department === "Developer"
);
//find / quiero un elemento que cumpla una condicion
let resultado1 = array.find(
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
console.log(greetings);
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
let employee2 = {
    name: "Jesus",
    role: "Developer"
};
let { name, role } = employee;

//transformar datos- debo usar .map()
//Buscar uno solo - debo usar .find()


//
function getFrontendDevelopers(employees) {
    return employees.filter(
        employee => employee.role === "Frontend Developer"
    );
}

//
function getNames(employees) {
    return employees.map(
        employee => employee.name
    );
}

//Reduce- cuando quiera convertir varios valores en un solo valor

let salaries = [1000, 2000, 3000];

let total = salaries.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

console.log(total);



/*map - se utiliza para transformar datos.
*filter- se utiliza para buscar mas de un elemento que cumpla con una condicion
*find- se utiliza para buscar un elemento que cumpla con una condicion
*forEach- se utiliza para recorrer datos y mostrar algunos que cumplan alguna condicion
*reduce- se utiliza para sumar varios números y obtener un resultad

ejercicio 1 - utilizaría map() porque voy a transformar datos
ejercicio 2 - Utilizaría filter()  ya que busco elementos que cumplan cierta condicion
ejercicio 3 - Utilizaria el metodo Find() ya que busco un elemento especifico
Ejercicio 4 - Utilizaria reduce() ay que quiero sumar los elementos
Ejercicio 5 - Utilizaria forEach() ya que solo quiero mostrar los ids
Ejercicio 6 - Utilizaria map() por que quiero transformar datos
Ejercicio 7 - Utilizaria Filter() ya que busco elementos que cumplen cierta condicion
Ejercicio 8 - Utilizaria find() ya que busco un solo elemento
Ejercicio 9 - Utilizaría reduce() ya que quiero sumar los numeros
Ejercicio 10 - Utilizaria forEach por que solo voy a miostrar datos

Tabla 
trasnformar datos - map()
filtrar varios elementos - filter()
busco uno solo - find()
mostrar / recorrer - forEach()
Convertir muchos valores en uno - reduce()
*/

map()
// Transformar datos
filter()
// Filtrar varios elementos
find()
// Buscar un solo elemento
forEach()
// Recorrer y ejecutar acciones
reduce()
// Convertir muchos valores en uno
sort()
//Ordenar elementos
some()
//Hay alguno que cumpla
every()
//Todos cumplen?