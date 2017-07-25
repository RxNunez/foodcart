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

var smallPharaoh = new Foodfinder("Middle Eastern",(,), "Small Pharaoh");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash", "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside", "Koi Fusion");
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
var samsSahj = new Foodfinder("middleastern","", "Sam's Saj");
var titosBurritos = new Foodfinder("mexican","", "Tito's Burritos");
var wholeBowl = new Foodfinder("american","", "The Whole Bowl");
var gyroPlace = new Foodfinder("middleastern","", "Gyro King");
var euroDish = new Foodfinder("american","", "Eurodish");
var nongsKhao =  new Foodfinder("asian","", "Nong's Khao Man Gai");
var annaThaiBasil = new Foodfinder("asian","", "Anna Thai Basil");
var alMawj = new Foodfinder("middleastern","", "Al Mawj");
var grilledCheeseGrill =  new Foodfinder("american","", "The Grilled Cheese Grill");
var chezDodo = new Foodfinder("Asian", "SW 5th & Stark", "Chez Dodo");
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
var moonlightMediterranean = new Foodfinder("Middle Eastern", (45.520182,-122674344), "232 SW Stark Ave", "Moonlight Mediterranean Food");
var mamaChowsKitchen = new Foodfinder("Asian", "300 SW 2nd Ave", (45.520244,-122.673548), "Mama Chow's Kitchen");
var donJalapeno = new Foodfinder("Mexican", "421 SW 3rd Ave", (45.519927,-122.674522), "Don Jalapeno");
var theFrenchToastConnection = new Foodfinder("American", "321 SW 2nd Ave", (45.520053,-122.673494), "The French Toast Connection");
var dcVegetarian = new Foodfinder("American", "430 SW 3rd Ave", (45.519788,-122.674083), "DC Vegetarian");
var elmasry = new Foodfinder("Middle Eastern", "SW 3rd Ave & SW Washington St", (45.519926,-122.674461), "Elmasry");
var culturedCaveman = new Foodfinder("American", "SW 3rd Ave & Stark Ave", (45.520119,-122.674168), "Cultured Caveman");
var honeyThaiFood = new Foodfinder("Asian", "232 SW Washington Street", (45.519583,-122.674507), "Honey Thai Food");
var elPilon = new Foodfinder("Mexican", "SW 2nd & Oak", (45.520442,-122.673216), "El Pilon");
var phatBlueBuddha = new Foodfinder("Middle Eastern", "", (45.519598,-122.674680), "Phat Blue Buddha");
var casablancaCuisine = new Foodfinder("Middle Eastern", "", (45.520042,-122.674501), "Casablanca Cuisine");
var welcomeToMediterraneanCuisine = new Foodfinder("Middle Eastern", "", (45.520042,-122.674533), "Welcome to Mediterranean Cuisine");
var taqueriaVillanueva = new Foodfinder("Mexican", "", (45.521057,-122.674080), "Taqueria Villanueva");
var rayaMiddleEastFood = new Foodfinder("Middle Eastern", "", (45.520218,-122.674437), "Raya Middle East Food");
var friendlyFood = new Foodfinder("Middle Eastern", "", (45.519672,-122.674699), "Friendly Food");
var asianStation = new Foodfinder("Asian", "", (45.520394,-122.673418), "Asian Station");
var justThai = new Foodfinder("Asian", "", (45.520435,-122.674455), "Just Thai");
var buddyBearTartHouse = new Foodfinder("American", "", (45.520133,-122.674389), "Buddy Bear Tart House");

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
