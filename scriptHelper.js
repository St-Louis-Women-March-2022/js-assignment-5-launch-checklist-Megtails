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
     console.log(testInput)
     if (Number(testInput) === Number) {
         return "Is a Number";
     } else if (isNaN(testInput)) {
         return "Not a Number";
     } else if (testInput === "") {
         return "Empty";
     }
 
 }
 
 function formSubmission(status, list, pilot, copilot, fuelLevel, cargoLevel) {
    
     //Checking pilot input field and updating list.
     if (validateInput(pilot.value) === "Not a Number") {
         list.style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = `1. Pilot ${pilot.value} is ready for launch.`;
     } else if (validateInput(pilot.value) === "Is a Number") {
         alert("Pilot name cannot be a number. Try again.");
     }
     //Checking co-pilot input field and updating list.
     if (validateInput(copilot.value) === "Not a Number") {
         list.style.visibility = "visible";
         document.getElementById("copilotStatus").innerHTML = `2. Co-Pilot ${copilot.value} is ready for launch.`;
     } else if (validateInput(copilot.value) === "Is a Number"){
         alert("Co-pilot name cannot be a number. Try again.");
     }
     //Checking fuel level input field and updating list.
     if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(fuelLevel.value) === "Empty") {
         alert("Invalid fuel level. Try again.");
     } else if (fuelLevel < 10000) {
         list.style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "3. Fuel level is too low for launch.";
         status.innerHTML = "Shuttle not ready for launch.";
         status.style.color = "red";
     } else {
         list.style.visibility = "visible";
     }
     //Checking cargo level input field and updating list.
     if (validateInput(cargoLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Empty") {
         alert("Invalid cargo mass. Try again.");
     } else if (cargoLevel > 10000) {
         list.style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "4. Cargo mass is too high for launch.";
         status.innerHTML = "Shuttle not ready for launch.";
         status.style.color = "red";
     } else {
         list.style.visibility = "visible";
     }
 
     if (fuelLevel >= 10000 && cargoLevel <= 10000) {
         list.style.visibility = "visible";
         status.innerHTML = "Shuttle is ready for launch!";
         status.style.color = "green";
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