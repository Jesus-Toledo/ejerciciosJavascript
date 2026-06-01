//-------------Sistema de empleados TechCorp----------------

let employees = [
    {
        id: 1,
        name: "Jesus",
        role: "Frontend Developer",
        salary: 2500,
        english: "B1"
    },
    {
        id: 2,
        name: "Maria",
        role: "Data Analyst",
        salary: 4000,
        english: "B2"
    },
    {
        id: 3,
        name: "Luis",
        role: "Backend Developer",
        salary: 3500,
        english: "A2"
    },
    {
        id: 4,
        name: "Ana",
        role: "Frontend Developer",
        salary: 5000,
        english: "C1"
    }
];


//A

let solution1 = employees.filter(employees => employees.salary > 3500);
console.log(solution1);


//B

let solution2 = employees.find(employees => employees.name === "Ana");
console.log(solution2);


//C

let solution3 = employees.map(employees => `${employees.name} - ${employees.role}`);
console.log(solution3);


//D

let solution4 = employees.forEach(
    employees => {
        console.log(employees.english);
    }
);
//E

let {name, role, english} = solution2;
console.log(name);
console.log(role);
console.log(english);


//F
//Usaria filter, porque con eso puedo buscar con la condicion de nombres y mostrar a todos.


//G
//Usaria find(), includes tambien, pero no funciona en arrays , por que así hago una comparativa dle nombre y me dará el resultado si es pósitivo o negativo.