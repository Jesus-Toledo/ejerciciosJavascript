let movies = [
    {
        tittle: "El señor de los anillos",
        year: 2001
    },
    {
        tittle: "American pie",
        year: 2005
    }
]

console.log(movies[0].tittle);
console.log(movies[1].year);

let phones = [
    {
        brand: "Apple",
        model: "Iphone 12"
    },
    {
        brand: "Samsung",
        model: "S20"
    }
]

console.log(phones[0].brand);

for (let i = 0; i < phones.length; i++) {
    console.log(phones[i].brand);
    
}


let developers = [
    { 
        name: "Jesús",
        role: "Fullstack developer",
    },

    {
        name: "Dayessi",
        role: "Frontend developer",
    }
]

for (let i = 0; i < developers.length; i++) {
    console.log(developers[i].name);
    
}

console.log(developers[1].role);
developers.push({
    name: "Luis",
    role: "Backend developer"
});

console.log(developers);

//Ejercicio A

let employees = [
    {
        name: "Jesús",
        department: "developer"
    },
    {
        name: "Dayessi",
        department: "accounting"
    },
    {
        name: "Luis",
        department: "sales"
    }
]

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
    
}


//Ejercicio B

let ticket = [ 
    {
        id:1,
        status: "pending"
    },
    {
        id:2,
        status: "open"
    }
]

ticket[1].status = "closed";
console.log(ticket);