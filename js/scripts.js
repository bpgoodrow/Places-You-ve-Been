//Places youve been

function PlacesYouveBeen() {
  this.destinations = {};
  this.currentId = 0;
};

PlacesYouveBeen.prototype.addDestination = function (destination) {
  destination.id = this.assignId();
  this.destinations[destination.id] = destination;
};

PlacesYouveBeen.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

PlacesYouveBeen.prototype.findDestination = function(id) {
  if (this.destinations[id] != undefined) {
    return this.destinations[id];
  }
  return false;
};




//Destination

function Destination(location, state, landmarks, bestTimeOfTheYear) {
  this.location = location;
  this.state = state;
  this.landmarks = landmarks;
  this.bestTimeOfTheYear = bestTimeOfTheYear;
};

let portlandOr = { location: "Portland", state: "Oregon", landmarks: "Waterfalls", bestTimeOfTheYear: "July" };

let seattleWa = { location: "Seattle", state: "Washington", landmarks: "People", bestTimeOfTheYear: "July" };

let portlandMe = { location: "Portland", state: "Maine", landmarks: "Trees", bestTimeOfTheYear: "October" };

let north = { name: "North", location}