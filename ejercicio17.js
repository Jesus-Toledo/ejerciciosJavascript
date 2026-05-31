let movies = [
    {
        title: "The Lord of the Rings",
        year: 2001,
        rating: 9
    },
    {
        title: "Titanic",
        year: 1997,
        rating: 8
    },
    {
        title: "Interstellar",
        year: 2014,
        rating: 10
    },
    {
        title: "Avatar",
        year: 2009,
        rating: 7
    }
];

//Reto 1
let rateMovie = movies.filter(movies => movies.rating >=9);
console.log(rateMovie);

let searchMovie = movies.find(movies => movies.title === "Interstellar");
console.log(searchMovie);



 for (let i = 0; i < movies.length; i++) {
    console.log(movies[i].year)
    
}

let newMovie = movies.map(
    movie => `Movie: ${movie.title}`
);

console.log(newMovie);


let allMovies = movies.includes("Avatar");

console.log(searchMovie);


//Reto 2

let tickets = [
    {
        id: 1,
        status: "Open",
        priority: "High"
    },
    {
        id: 2,
        status: "Closed",
        priority: "Low"
    },
    {
        id: 3,
        status: "Open",
        priority: "Medium"
    },
    {
        id: 4,
        status: "Closed",
        priority: "High"
    },
    {
        id: 5,
        status: "Open",
        priority: "Low"
    }
];


let openTickets = tickets.filter(tickets => tickets.status === "Open");
console.log(openTickets);

let ticket = tickets.find(tickets => tickets.id === 3);
console.log(ticket);

let ticketPriority = tickets.map(
    ticket => `Ticket #${ticket.id}`
);

console.log(ticketPriority);

for (let i = 0; i < tickets.length; i++) {
    console.log(tickets[i].priority);
    
}