// Business Logic

function Foodfinder(type, location, truck) {
  this.type = type;
  this.location = location;
  this.truck = truck;
  // this.menuItem = menuItem;
  // this.price = price;
  // this.description = [];
}

var smallPharaoh = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Small Pharaoh");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash", "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside", "Koi Fusion");
var someAsianTruck = new Foodfinder("Asian", "2010 W Burnside", "Asian Truck");
var altengartz = new Foodfinder("", "", "Altengartz");
var esanthai = new Foodfinder("asian","", "E-San Thai Cart");
var traditionalpolish = new Foodfinder("american","","Traditional Polish Cuisine");
var numberOneBento = new Foodfinder("asian","", "Number 1 Bento");
var wolfandbear = new Foodfinder("american","", "Wolf and Bear");
var gyroKing =  new Foodfinder("middleastern","", "Gyro King");
var zendako = new Foodfinder("asian","", "Zendako");
var bingMi = new Foodfinder("asian","", "Bing Mi");
var baghdadiraqi =  new Foodfinder("middleastern","", "Baghdad Iraqi Grill");
var sawasdeeThai = new Foodfinder("asian","", "Sawasdee Thai");
var theFryingScotsman = new Foodfinder("","", "The Frying Scotsman");
var marcoPoloSandwiches = new Foodfinder("","", "Marco Polo's Sandwiches");
var rollingGourmetFusion = new Foodfinder("asian","", "Rolling Gourmet Fusion");
var obrososteria =new Foodfinder("american","","O-Bros’ Osteria");
var samsSahj = new Foodfinder("middleastern","", "Sam's Saj");
var titosBurritos = new Foodfinder("mexican","", "Tito's Burritos");
var thaiKeeMao = new Foodfinder("asian","", "Thai Kee Mao");
var samuraiBento = new Foodfinder("asian","", "Samurai Bento");
var wholeBowl = new Foodfinder("american","", "The Whole Bowl");
var gyroPlace = new Foodfinder("middleastern","", "Gyro King");
var euroDish = new Foodfinder("american","", "Eurodish");
var nongsKhao =  new Foodfinder("asian","", "Nong's Khao Man Gai");
var annaThaiBasil = new Foodfinder("asian","", "Anna Thai Basil");
var alMawj = new Foodfinder("middleastern","", "Al Mawj");
var grilledCheeseGrill =  new Foodfinder("american","", "The Grilled Cheese Grill")

var directory = [grilledCheeseGrill, smallPharaoh, laPinataTakos, koiFusion, someAsianTruck, altengartz, esanthai, traditionalpolish, numberOneBento, wolfandbear, gyroKing, zendako, bingMi, baghdadiraqi, sawasdeeThai, theFryingScotsman, marcoPoloSandwiches, rollingGourmetFusion, samsSahj, titosBurritos, thaiKeeMao, samuraiBento, wholeBowl, gyroPlace, euroDish, nongsKhao, annaThaiBasil, alMawj, grilledCheeseGrill, potatoesonninth];

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
