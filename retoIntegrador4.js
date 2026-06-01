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

let solution1 = employees.filter(employees => employees.english === "B2" || employees.english === "C1");
console.log(solution1);

//B

let solution3 = solution1.map(employee => employee.name);
console.log(solution3);

//C
solution1.forEach(employees => {
    console.log(employees.name);
});

//D
solution2 = employees.find(employees => employees.id === 3);
console.log(solution2);

let {name, salary} = solution2;
console.log(name);
console.log(salary);

//E
/** 
 * 
 * 1-Transformar datos- para esto se utiliza map
    2-Buscar uno - para esto se utiliza find
*/
