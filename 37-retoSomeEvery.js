//Reto NOC
let alarms = [
    {
        id: 1,
        severity: "High",
        status: "Open"
    },
    {
        id: 2,
        severity: "Low",
        status: "Closed"
    },
    {
        id: 3,
        severity: "Medium",
        status: "Open"
    },
    {
        id: 4,
        severity: "High",
        status: "Closed"
    }
];

//A
let hasHighSeverity = alarms.some(
    alarm => alarm.severity === "High"
);

//B
let allClosed = alarms.every(
    alarm => alarm.status === "Closed"
);

//C
let openAlarms = alarms.filter(
    alarm => alarm.status === "Open"
);
console.log(openAlarms);

//D
let ids = alarms.map(
    alarm => alarm.id
);

console.log(ids);

//E
let alarm = alarms.find(
    alarm => alarm.id === 3
);

//F
alarms.sort(
    (a, b) => b.id - a.id
);

//G

/*
-Obtener solo los nombres = map()
-Buscar un empleado por ID = find()
-Filtrar salarios mayor a 5000 = filter()
-Saber si existe un empleado con ingles C1 = some()
-Saber si todos tiene ingles B1 = every()
-Sumar salarios = reduce()
-Ordenar salario = sort()
-Mostrar todos los nombre = forEach()
*/ 