let employees = [
    {
        name: "Jesús",
        department: "Fullstack",
        salary: 1000
    },
    {
        name: "Dayessi",
        department: "Frontend",
        salary: 1500
    },
    {
        name: "Maria",
        department: "Data Analyst",
        salary: 3500
    },
    {
        name: "Luis",
        department: "backend",
        salary: 4000
    }
];

let hightsalary = employees.filter(employees => employees.salary > 3000);
console.log(hightsalary);

let newEmployee = employees.find(employees => employees.name === "Maria");
console.log(newEmployee);

let employeeNames = employees.map(
    employee => `Employee: ${employee.name}`
);

console.log(employeeNames);

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].department);
    
}

console.log(employees.includes("Developer"));
