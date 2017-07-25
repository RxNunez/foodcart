// Business Logic

function Foodfinder(type, location,{lat, long}, truck, image) {
  this.type = type;
  this.location = location;
  this.mapcords= {
    this.lat = lat;
    this.long = long;
  }
  this.truck = truck;
  this.img = image;
  // this.menuItem = menuItem;
  // this.price = price;
  // this.description = [];
}
function coordinates (lattitude, longitude){
  this.lat = lattitude;
  this.long = longitude;
}
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomNumberGenerator(0, directory.length);

var smallPharaoh = new Foodfinder("Middle Eastern","",'[45.520772, -122.676335]', "Small Pharaoh");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash",'[45.5221111, -122.6731111]', "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside",'[45.523034, -122.692822]', "Koi Fusion");
var altengartz = new Foodfinder("", "",'[45.520697, -122.681491]',"Altengartz");
var esanthai = new Foodfinder("asian","", '[45.520928, -122.681479]',"E-San Thai Cart");
var traditionalpolish = new Foodfinder("american","",'[45.520853, -122.681507]',"Traditional Polish Cuisine");
var numberOneBento = new Foodfinder("asian","",'[45.520813, -122.681513]', "Number 1 Bento");
var wolfandbear = new Foodfinder("american","",'[45.521173, -122.681429]', "Wolf and Bear");
var zendako = new Foodfinder("asian","",'[45.521126, -122.681202]', "Zendako");
var bingMi = new Foodfinder("asian","",'[45.520533, -122.680810]', "Bing Mi");
var baghdadiraqi =  new Foodfinder("middleastern","",'[45.521192, -122.681206]', "Baghdad Iraqi Grill");
var sawasdeeThai = new Foodfinder("asian","",'[45.520593, -122.680961]', "Sawasdee Thai");
var theFryingScotsman = new Foodfinder("","", '[45.520766, -122.680722]',"The Frying Scotsman");
var marcoPoloSandwiches = new Foodfinder("","",'[45.520874, -122.680625]', "Marco Polo's Sandwiches");
var rollingGourmetFusion = new Foodfinder("asian","",'[45.521005, -122.680851]', "Rolling Gourmet Fusion");
var samsSaj = new Foodfinder("middleastern","",'[45.521127, -122.681345]', "Sam's Saj");
var titosBurritos = new Foodfinder("mexican","",'[45.520662, -122.681330]', "Tito's Burritos");
var wholeBowl = new Foodfinder("american","",'[45.520560, -122.681098]', "The Whole Bowl");
var gyroPlace = new Foodfinder("middleastern","",'[45.520499, -122.680814]', "Gyro King");
var euroDish = new Foodfinder("american","", '[45.520730, -122.681646]',"Eurodish");
var nongsKhao =  new Foodfinder("asian","", '[45.520809, -122.682025]',"Nong's Khao Man Gai");
var annaThaiBasil = new Foodfinder("asian","", '[45.520807, -122.681595]',"Anna Thai Basil");
var alMawj = new Foodfinder("middleastern","",'[45.520898, -122.681554]', "Al Mawj");
var grilledCheeseGrill =  new Foodfinder("american","",'[45.521039, -122.681393]', "The Grilled Cheese Grill");
var chezDodo = new Foodfinder("Asian", "SW 5th & Stark",'[45.520900, -122.675942]', "Chez Dodo");
var caribbeanKitchen = new Foodfinder("American", "SW 5th & Stark", "Caribbean Kitchen");
var kingslandKitchen = new Foodfinder("American", "SW 5th & Stark", "Kingsland Kitchen");
var laJarochita = new Foodfinder("Mexican", "SW 5th & Stark", "La Jarochita");
var veliThai = new Foodfinder("Asian", "SW 5th & Stark", "Veli Thai");
var stumptownSliders = new Foodfinder("American", "SW 5th & Stark", "Stumptown Sliders");
var donJalapeno = new Foodfinder("Mexican", "SW 5th & Stark", "Don Jalapeno");
var broDogs = new Foodfinder("Americans", "SW 5th & Stark", "Bro-Dogs");
var babylonIraqi = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Babylon Iraqi");
var koreanTwist = new Foodfinder("Asian", "SW 5th & Stark", "Korean Twist");
var realTasteOfIndia = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Real Taste of India");
var steaksFifthAvenue = new Foodfinder("American", "SW 5th & Stark", "Steaks Fifth Avenue");
var hawaiianGrill = new Foodfinder("American", "SW 5th & Stark", "Hawaiian Grill");
var schnitzelwich = new Foodfinder("American", "SW 5th & Stark", "Schnitzelwich");
var keeMaoThai = new Foodfinder("Asian", "SW 5th & Stark", "Kee Mao Thai Food Cart");
var thaiSky = new Foodfinder("Asian", "SW 5th & Stark", "Thai Sky");
var wagsyHotBeef = new Foodfinder("American", "SW 5th & Stark", "Wagsy's Hot Beef Sandwiches");
var khobKhun = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Khob Khun");
var pretzelBakery = new Foodfinder("American", "SW 5th & Stark", "Portland Pretzel Bakery");
var shawarmaStar = new Foodfinder("Middle Eastern", "SW 5th & Stark", "Shawarma Star");
var banMi = new Foodfinder("Asian", "SW 5th & Stark", "Condenz Banh Mi");
var moonlightMediterranean = new Foodfinder("Middle Eastern", "232 SW Stark Ave", "Moonlight Mediterranean Food");
var mamaChowsKitchen = new Foodfinder("Asian", "300 SW 2nd Ave", "Mama Chow's Kitchen");
var donJalapeno = new Foodfinder("Mexican", "421 SW 3rd Ave", "Don Jalapeno");
var theFrenchToastConnection = new Foodfinder("American", "321 SW 2nd Ave", "The French Toast Connection");
var dcVegetarian = new Foodfinder("American", "430 SW 3rd Ave", "DC Vegetarian");
var elmasry = new Foodfinder("Middle Eastern", "SW 3rd Ave & SW Washington St", "Elmasry");
var culturedCaveman = new Foodfinder("American", "SW 3rd Ave & Stark Ave", "Cultured Caveman");
var honeyThaiFood = new Foodfinder("Asian", "232 SW Washington Street", "Honey Thai Food");
var elPilon = new Foodfinder("Mexican", "SW 2nd & Oak", "El Pilon");
var phatBlueBuddha = new Foodfinder("Middle Eastern", "", "Phat Blue Buddha");
var casablancaCuisine = new Foodfinder("Middle Eastern", "", "Casablanca Cuisine");
var welcomeToMediterraneanCuisine = new Foodfinder("Middle Eastern", "", "Welcome to Mediterranean Cuisine");
var taqueriaVillanueva = new Foodfinder("Mexican", "", "Taqueria Villanueva");
var rayaMiddleEastFood = new Foodfinder("Middle Eastern", "", "Raya Middle East Food");
var friendlyFood = new Foodfinder("Middle Eastern", "", "Friendly Food");
var asianStation = new Foodfinder("Asian", "", "Asian Station");
var justThai = new Foodfinder("Asian", "", "Just Thai");
var buddyBearTartHouse = new Foodfinder("American", "", "Buddy Bear Tart House");

var directory = [chezDodo, caribbeanKitchen, kingslandKitchen, laJarochita, veliThai, stumptownSliders, donJalapeno, broDogs, babylonIraqi, koreanTwist, realTasteOfIndia, steaksFifthAvenue, hawaiianGrill, schnitzelwich, keeMaoThai, thaiSky, wagsyHotBeef, khobKhun, pretzelBakery, shawarmaStar, banMi, smallPharaoh, laPinataTakos, koiFusion, someAsianTruck, altengartz, esanthai, traditionalpolish, numberOneBento, wolfandbear, gyroKing, zendako, bingMi, baghdadiraqi, sawasdeeThai, theFryingScotsman, marcoPoloSandwiches, rollingGourmetFusion, samsSahj, titosBurritos, wholeBowl, gyroPlace, euroDish, nongsKhao, annaThaiBasil, alMawj, grilledCheeseGrill, potatoesonninth, buddyBearTartHouse, justThai, asianStation, friendlyFood, rayaMiddleEastFood, taqueriaVillanueva, welcomeToMediterraneanCuisine, casablancaCuisine, phatBlueBuddha, elPilon, honeyThaiFood, culturedCaveman, elmasry, dcVegetarian, theFrenchToastConnection, donJalapeno, mamaChowsKitchen, moonlightMediterranean ];

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
