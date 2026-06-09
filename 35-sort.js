//sort() - sirve para ordenar datos , en este caso los ordena de orden alfabetico

let countries = [
    "Mexico",
    "Canada",
    "Japan"
];

countries.sort();

console.log(countries);

//para numeros tenemos que aplicar el siguiente truco- para ordenarlos de menor a mayor
let numbers = [100, 5, 20];

numbers.sort(
    (a, b) => a - b
);

console.log(numbers);

//ejemplo 
let salaries = [2500, 5000, 3000];

salaries.sort(
    (a, b) => b - a
);

console.log(salaries);

//ordenar objetos
let employees = [
    {
        name: "Jesus",
        salary: 2500
    },
    {
        name: "Maria",
        salary: 4000
    },
    {
        name: "Luis",
        salary: 3500
    }
];

//menor a mayor
employees.sort(
    (a, b) => a.salary - b.salary
);

//mayor a menor
employees.sort(
    (a, b) => b.salary - a.salary
);

//ejercicio 1
//30, 20, 10

//ejercicio 2
//10, 20, 30

//ejercicio 3
let salaries = [4000, 2000, 3000];

salaries.sort(
    (a, b) => a - b
);

console.log(salaries);

//ejercicio 4
let salaries = [4000, 2000, 3000];

salaries.sort(
    (a, b) => b - a
);

console.log(salaries);

//ejercicio 5
let employees = [
    {
        name: "Jesus",
        salary: 2500
    },
    {
        name: "Maria",
        salary: 4000
    },
    {
        name: "Luis",
        salary: 3500
    }
];

employees.sort(
    (a, b) => a - b
);

//ejercicio 6
employees.sort(
    (a, b) => b - a
);

//ejercicio 7
//.sort()

//ejercicio 8
//.find()

//ejercicio 9
//.map()

/*¨Ejercicio 10

transformar = map()
filtrar varios = filter()
buscar uno = find()
recorrer = forEach()
reducir a un valor = reduce()
ordenar = sort()
*/