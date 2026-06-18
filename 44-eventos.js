//eventos
//let button1 = document.getElementById("btn");

/**
 * button.addEventListener("click", () => {
    console.log("Button clicked");
});

ejemplo

let alarms = [
    {
        id: 1,
        severity: "High"
    },
    {
        id: 2,
        severity: "Low"
    }
];

let button = document.getElementById("showAlarms");

button.addEventListener("click", () => {

    let html = alarms
        .map(
            alarm =>
            `<p>Alarm ${alarm.id} - ${alarm.severity}</p>`
        )
        .join("");

    document.getElementById("alarms").innerHTML = html;

});

*/

//reto 1

let skills = [
    "HTML",
    "CSS",
    "JavaScript"
];

let button = document.getElementById("showSkills");

button.addEventListener("click", () => {
    let html = skills
        .map(
            skill => `<div>${skill}</div>`
        )
        .join("");
    document.getElementById("skills").innerHTML = html;
});