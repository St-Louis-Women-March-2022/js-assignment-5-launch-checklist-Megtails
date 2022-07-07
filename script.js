// Write your JavaScript code here!

//const { formSubmission } = require("./scriptHelper"); PUT THIS BACK!!!

window.addEventListener("load", function() {
    //Grabbed the input for each of these fields and assigned them to a variable
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems");
   // let doc = document.getElementById("launchStatus");
 
    /*if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
        alert("All fields are required!");
    }*/

    //Calls formSubmission function whenever the submit button is clicked
    document.getElementById("formSubmit").addEventListener("click", formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel));

   /*let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   }); PUT THIS BACK!!!*/ 

   

});

