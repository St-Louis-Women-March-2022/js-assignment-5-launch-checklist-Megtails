// Write your JavaScript code here!

//const { formSubmission, myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    //My DOM variables:
    //const submitButton = document.getElementById("formSubmit")
    const form = document.querySelector("form");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");
    let status = document.getElementById("launchStatus");
    
    //Calls formSubmission function whenever the submit button is clicked
    form.addEventListener("submit", function(event) {
 
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            event.preventDefault();
            formSubmission(status, list, pilot, copilot, fuelLevel, cargoLevel);
        }

    });
    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        addDestination(pickPlanet(planetsReturned));
    });

   

});
