let alarms = [
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
        engineer: "Maria"
    },
    {
        id: 3,
        severity: "High",
        status: "Open",
        engineer: "Luis"
    },
    {
        id: 4,
        severity: "Low",
        status: "Closed",
        engineer: "Ana"
    }
];

//Ejercicio A
function getOpenAlarms(alarms) {
    return alarms.filter( alarms => alarms.status === "Open");
}
let result = getOpenAlarms(alarms);
console.log(result)

//Ejercicio B
function getEngineers(alarms) {
   return alarms.map(alarms => alarms.engineer);
}

let result1 =  getEngineers(alarms);
console.log(result1);

//Ejercicio C
function namefindAlarmById(alarms, id) {
    return alarms.find(
        alarms => alarms.id === id
    );
}

let result2 =namefindAlarmById(alarms, 3);
console.log(result2);

//Ejercicio D

function getHighSeverityEngineers(alarms) {
    return alarms.filter(
        alarms => alarms.severity === "High"
    ).map(
        alarms => alarms.engineer
    );
}

let result3 = getHighSeverityEngineers(alarms);
console.log(result3);