let alarms = [
    {
        id: 1,
        severity: "High"
    },
    {
        id: 2,
        severity: "Medium"
    },
    {
        id: 3,
        severity: "High"
    },
    {
        id: 4,
        severity: "Low"
    }
];

//Ejercicio A

let totalAlarmas = alarms.reduce(
    accumulator => accumulator += 1,
    0
);

console.log(totalAlarmas);

//Ejercicio B
let cpu = [20, 30, 50, 10];

let totalcpu = cpu.reduce(
    (accumulator, cpu) => accumulator + cpu
);
console.log(totalcpu);

//Ejercicio C
//uso find

//Ejercicio D
//usaria filter

//Ejercicio E
//Usaria reduce