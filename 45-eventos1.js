let servers = [
    {
        name: "Server-A",
        status: "Online"
    },
    {
        name: "Server-B",
        status: "Offline"
    },
    {
        name: "Server-C",
        status: "Online"
    }
];

let button1 = document.getElementById("showServers");

button1.addEventListener("click", () => {
    let html = servers
        .map(server => `<div>${server.name} - ${server.status}</div>`)
        .join("");

    document.getElementById("servers").innerHTML = html;
}

);

// extra


let button = document.getElementById("showServers");

button.addEventListener("click", () => {
    let html = servers
        .filter(server => server.status === "Online")
        .map(server => `<div>${server.name} - ${server.status}</div>`)
        .join("");

    document.getElementById("servers").innerHTML = html;
}

);
