function PlacesYouveBeen() {
  this.destinations = {};
  this.currentId = 0;
}

PlacesYouveBeen.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

PlacesYouveBeen.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

PlacesYouveBeen.prototype.findDestination = function (id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
};

Destination

function Destination(location, state, landmarks, bestTimeOfTheYear) {
  this.location = location;
  this.state = state;
  this.landmarks = landmarks;
  this.bestTimeOfTheYear = bestTimeOfTheYear;
};

//Usser Interface Logic
let placeYouveBeen = new PlacesYouveBeen();

function displayDestinationDetails(placeYouveBeenToDisplay) {
  let destinationsList = $("ul#destinations");
  let htmlForDestinationInfo = "";
  Object.keys(placeYouveBeenToDisplay).forEach(function (key) {
    const destination = placeYouveBeenToDisplay.findDestination(key);
    htmlForDestinationInfo += "<li id=" + destination.id + ">" + destination.location + " " + destination.state + "</li>";
  });
  destinationsList.html(htmlForDestinationInfo);
}

$(document).ready(function () {
  $("form#new-destination").submit(function (event) {
    event.preventDefault();
    const inputLocation = $("input#new-location").val();
    const inputState = $("input#new-state").val();
    const inputLandmarks = $("input#new-landmarks").val();
    const inputBestTimeOfTheYear = $("input#new-bestTimeOfTheYear").val();
    let newDestination = new Destination(inputLocation, inputState, inputLandmarks, inputBestTimeOfTheYear);
    placeYouveBeen.addDestination(newDestination);
    console.log(placeYouveBeen.destinations);

  });
});


  // const results = Destination(location, state, landmarks, bestTimeOfTheYear);
    // $("show-destination").text(results);

// let portlandOr = { location: "Portland", state: "Oregon", landmarks: "Waterfalls", bestTimeOfTheYear: "July" };
// let seattleWa = { location: "Seattle", state: "Washington", landmarks: "People", bestTimeOfTheYear: "July" };
// let portlandMe = { location: "Portland", state: "Maine", landmarks: "Trees", bestTimeOfTheYear: "October" };

// function Destination(portlandOr, seattleWa, portlandMe)

// let portlandOr = { location: "Portland", state: "Oregon", landmarks: "Waterfalls", bestTimeOfTheYear: "July" };
// let seattleWa = { location: "Seattle", state: "Washington", landmarks: "People", bestTimeOfTheYear: "July" };
// let portlandMe = { location: "Portland", state: "Maine", landmarks: "Trees", bestTimeOfTheYear: "October" };
// let placesYouveBeen = { name: "United States of America", cities: [portlandOr, seattleWa, portlandMe]};

