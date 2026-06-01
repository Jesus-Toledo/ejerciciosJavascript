//-----------Reto 1 - Sistema de servidores NOC -----------

let servers = [
    {
        name: "Server-A",
        status: "Online",
        cpu: 30
    },
    {
        name: "Server-B",
        status: "Offline",
        cpu: 10
    },
    {
        name: "Server-C",
        status: "Online",
        cpu: 85
    },
    {
        name: "Server-D",
        status: "Online",
        cpu: 50
    }
];

//A
let filter1 = servers.filter(servers => servers.status === "Online");
console.log(filter1);

//B
let encontrarFiltro = servers.find(servers => servers.name === "Server-C");
console.log(encontrarFiltro);


//C

let newArray = servers.map(servers => `Server: ${servers.name}`);
console.log(newArray);


//D

let valorServer = servers.forEach(servers => {
    console.log(`${servers.cpu}`);
});

//E

let {name, cpu} = encontrarFiltro
console.log(name);
console.log(cpu);

//----------   Reto 2 - Sistema de cursos -----------------

let courses = [
    {
        title: "JavaScript",
        level: "Beginner",
        duration: 20
    },
    {
        title: "Java",
        level: "Intermediate",
        duration: 40
    },
    {
        title: "Python",
        level: "Advanced",
        duration: 60
    }, 
    {
        title: "Ruby",
        level: "Beginner",
        duration: 20
    }
];

//A

let timeCourse = courses.filter(courses => courses.duration > 15);
console.log(timeCourse);


//B

let foundCourse = courses.find(courses => courses.title === "JavaScript");
console.log(foundCourse);


//C

nameCourse = courses.map(courses => `Course : ${courses.title}`);
console.log(nameCourse);


//D
let levelCourse = courses.forEach(courses => {
    console.log(`${courses.level}`);
});


//E

let {title, duration } = foundCourse
console.log(title);
console.log(duration);