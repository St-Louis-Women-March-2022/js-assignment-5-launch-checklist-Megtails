// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">
    `
}

function validateInput(testInput) {
    //Checking to see if the input is a number, not a number, or an empty string.
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

function formSubmission(status, list, pilot, copilot, fuelLevel, cargoLevel) {

    //Checking pilot input field and updating list.
    if (validateInput(pilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready for launch.`;
    } else if (validateInput(pilot.value) === "Is a Number") {
        alert("Pilot name cannot be a number. Try again.");
        return;
    }
    //Checking co-pilot input field and updating list.
    if (validateInput(copilot.value) === "Not a Number") {
        list.style.visibility = "visible";
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready for launch.`;
    } else if (validateInput(copilot.value) === "Is a Number") {
        alert("Co-pilot name cannot be a number. Try again.");
        return;
    }
    //Checking fuel level input field and updating list.
    if (fuelLevel.value < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level is too low for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else if (validateInput(fuelLevel.value) === "Not a Number") {
        alert("Invalid fuel level. Try again.");
    } else {
        list.style.visibility = "visible";
    }

    //Checking cargo level input field and updating list.
    if (cargoLevel.value > 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass is too high for launch.";
        status.innerHTML = "Shuttle not ready for launch.";
        status.style.color = "red";
    } else if (validateInput(cargoLevel.value) === "Not a Number") {
        alert("Invalid cargo mass. Try again.");
    } else {
        list.style.visibility = "visible";
    }

    if (fuelLevel.value >= 10000 && cargoLevel.value <= 10000) {
        list.style.visibility = "visible";
        status.innerHTML = "Shuttle is ready for launch!";
        status.style.color = "green";
    }

}


async function myFetch() {
    let planetsReturned;
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function(json) {
            //add code here
        });
    });
    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length);
    let planet = planets[randomPlanet];

    return planet;
}

/*
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
*/