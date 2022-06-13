Describe: function Destinations()

Test: "Include all necessary properties in Destination() object"
Code: function Destination(location, state, landmarks, bestTimeOfTheYear) {
  this.location = location;
  this.state = state;
  this.landmarks = landmarks;
  this.bestTimeOfTheYear = bestTimeOfTheYear;
}
Expected Output: Undefine all properties

Test: "Verify testDestination returns new properties for each property"
Code: let testDestination = new Destination("Portland", "Oregon", "Waterfalls", "July");
Expected Output: undefined

Test: "Make sure each property returns expected value"
Code: testDestination.location, testDestination.state, testDestination.landmarks, testDestination.bestTimeOfTheYear;
Expected Output: 'Portland, 'Oregon', 'Waterfalls', 'July'

Describe: function PlacesYouveBeen()

Test: "Create PlacesYouveBeen as a constructor."
Code: function PlacesYouveBeen(){
  this.destinations = {};
};
Expected Output: Undefined

Test: "Create prototype method to add new locations to PlacesYouveBeen."
Code: PlacesYouveBeen.prototype.addDestination = function(destination) {
  this.destinations[destination.location] = destination;
};
Expected Output: ƒ (destination) {
  this.destinations[destination.location] = destination;
}

Test: "Create testDestination to test addDestination prototype in console"
Code: let placesYouveBeen = new PlacesYouveBeen();
let testDestination = new Destination("Portland", "Oregon", "Waterfalls", "July");
placesYouveBeen.addDestination(testDestination);
placesYouveBeen.destinations;
Expected Output:{Portland: Destination}
Portland: Destination
state: "Oregon"
bestTimeOfTheYear: "July"
landmarks: "Waterfalls"
location: "Portland"
[[Prototype]]: Object
[[Prototype]]: Object

Test: "Test to assign unique object ID to Destination"
Code: let testDestination1 = new Destination("Portland", "Maine", "Trees", "July");
placesYouveBeen.addDestination(testDestination1);
placesYouveBeen.destinations;
{1: Destination, 2: Destination}
1: Destination {location: 'Portland', state: 'Oregon', landmarks: 'Waterfalls', bestTimeOfTheYear: 'July', id: 1}
2: Destination {location: 'Portland', state: 'Maine', landmarks: 'Trees', bestTimeOfTheYear: 'July', id: 2}
[[Prototype]]: Object