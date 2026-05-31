let alarmas = [
    {
        id: 1,
        severity: "High",
        status: "Open",
        engineer: "Jesus"
    },
    {
        id: 2,
        severity: "Medium",
        status: "Closed",
        engineer: "Dayessi"
    },
    {
        id: 3,
        severity: "Low",
        status: "Open",
        engineer: "Luis"
    },
    {
        id: 4,
        severity: "High",
        status: "Closed",
        engineer: "Ramiro"
    },
    {
        id: 5,
        severity: "Medium",
        status: "Open",
        engineer: "Maria"
    }
];

let filtrados = alarmas.filter(alarmas => alarmas === "Open");
console.log(filtrados);

let newAlarma =alarmas.find(alarmas => alarmas.id === 3);
console.log(newAlarma);

let numberAlarm = alarmas.map(alarmas => `Alarm: ${alarmas.id}`);
console.log(numberAlarm);

alarmas.forEach(alarmas => {
    console.log(alarmas.engineer);
});

// el destructuring se obtiene del objeto encontrado dentro del array
let newAlarma1 = alarmas.find(
    alarma => alarma.id === 3
);

let { severity, status } = newAlarma1;

console.log(severity);
console.log(status);