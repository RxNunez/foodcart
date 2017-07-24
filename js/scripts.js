// Business Logic

function Foodfinder(type, location, truck) {
  this.type = type;
  this.location = location;
  this.truck = truck;
  this.menuItem = menuItem;
  this.price = price;
  this.description = [];
}

var grilledCheeseGrill = new Foodfinder("American", "SW 10th & Alder", "Grilled Cheese Grill");
var smallPharaoh = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Small Pharaoh");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash", "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside", "Koi Fusion");

var directory = [grilledCheeseGrill, smallPharaoh, laPinataTakos, koiFusion];

var x = "asian"

var result = directory.find(function(obj){
  return obj.type === x

});
console.log(result);
alert(result.truck);













// UI Logic
// $(document).ready(function(){
//
//
//
//
//
// });
