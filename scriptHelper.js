// Write your helper functions here!
//require('isomorphic-fetch'); PUT THIS BACK!!!

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
}

function validateInput(testInput) {
    //Checking to see if the input is a number, not a number, or an empty string.
    console.log(testInput.value)
    if (Number(testInput.value) === Number) {
        return "Is a Number";
    } else if (isNaN(testInput.value)) {
        return "Not a Number";
    } else if (testInput.value === "") {
        return "Empty";
    }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   event.preventDefault();
    //Checking to make sure the input is valid.
    if (validateInput(pilot) === "Not a Number") {
        document.getElementById("pilotStatus").innerHTML = `1. Pilot ${pilot} is ready for launch.`
    } else {
        alert("Invalid pilot name. Try again.")
    }

    if (validateInput(copilot) === "Not a Number") {
        document.getElementById("copilotStatus").innerHTML = `1. Co-Pilot ${copilot} is ready for launch.`
    } else {
        alert("Invalid co-pilot name. Try again.")
    }

    if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty") {
        alert("Invalid fuel level. Try again.");
    } else if (fuelLevel < 10000) {

    }

    if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty") {
        alert("Invalid cargo mass. Try again.");
    }

}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

/*
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
PUT THIS BACK!!!*/
