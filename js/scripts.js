// Business Logic

function Foodfinder(type, location, truck) {
  this.type = type;
  this.location = location;
  this.truck = truck;
  // this.menuItem = menuItem;
  // this.price = price;
  // this.description = [];
}

var grilledCheeseGrill = new Foodfinder("American", "SW 10th & Alder", "Grilled Cheese Grill");
var smallPharaoh = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Small Pharaoh");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash", "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside", "Koi Fusion");
var someAsianTruck = new Foodfinder("Asian", "2010 W Burnside", "Asian Truck");

var directory = [grilledCheeseGrill, smallPharaoh, laPinataTakos, koiFusion, someAsianTruck];

var asian=[];
var userinput = "Asian";

for(i=0; i<directory.length; i++){
  if(directory[i].type === userinput)
  asian.push(directory[i]);
}

console.log(asian);
















// UI Logic
// $(document).ready(function(){
//
//
//
//
//
// });
