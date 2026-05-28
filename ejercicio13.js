let numbers = [1, 2, 3, 4, 5];
bigNumber = numbers.filter(number => number >2);
console.log(bigNumber);

let ages = [16, 20, 25, 30];
adults = ages.filter(age => age >= 18);
console.log(adults);    

let salaries = [1000, 1500, 2000, 2500];
hightSalary = salaries.filter(salary => salary > 2000);
console.log(hightSalary);

let developers = [
    {
        name: "Jesús",
        age: 38
    },
    {
        name: "Dayessi",
        age: 25
    },
    {
        name: "Maria",
        age: 30
    }
];





//Ejercicio A

let countries = ["México", "Canadá", "USA", "Japan"];
bigCountries = countries.filter(country => country.length > 5);
console.log(bigCountries);


//Ejercicio B

let employees = [
    {
        name: "Jesús",
        department: "Developer"
    },
    {
        name: "Dayessi",
        department: "Frontend"
    },
    {
        name: "Maria",
        department: "Data Analyst"
    }
];

newEmply = employees.filter(employee => employee.department === "Developer");
console.log(newEmply);
