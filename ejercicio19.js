let employees = [
    {
        name: "Jesus",
        department: "Developer"
    },
    {
        name: "Maria",
        department: "Data Analyst"
    },
    {
        name: "Luis",
        department: "Backend"
    }
];

employees.forEach(
    employees => {
        console.log(employees.name)
});

employees.forEach(
    employees => {
        console.log(`Employee: ${employees.name}`)
    } 
);

employees.forEach(
    employees => {
        console.log(employees.department)
    }
);