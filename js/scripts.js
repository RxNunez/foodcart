// Business Logic
function Foodfinder(type, location, lat, long, truck, image) {
  this.type = type;
  this.location = location;
  this.lat = lat;
  this.long = long;
  this.truck = truck;
  this.img = image;
}
function randomNumberGenerator(length) {
    return Math.floor(Math.random() * (length));
}
function randomFoodCart(input) {
  if (input === "random") {
    var numberRan = randomNumberGenerator(directory.length);
    return (directory[numberRan]);
  } else {
    var selected=[];
    for(i=0; i<directory.length; i++){
      if(directory[i].type === input)
      selected.push(directory[i]);
    }
    var numberRan = randomNumberGenerator(selected.length);
    return selected[numberRan];
  }
}
var smallPharaoh = new Foodfinder("Middle Eastern","1900 SW 4th Ave",'45.520772', '-122.676335', "Small Pharaoh", "./img/smallPharaoh.jpg");
var dumpTruck = new Foodfinder("Asian","1071 SW Alder St",'45.520949', '-122.682212', "The Dump Truck", "./img/dumpTruck.jpg");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash",'45.5221111', '-122.6731111', "La Pinata Takos", "./img/laPinataTakos.jpg");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside",'45.523034', '-122.692822', "Koi Fusion", "./img/koiFusion.jpg");
var altengartz = new Foodfinder("American", "SW 10th & Alder",'45.520697', '-122.681491',"Altengartz", "./img/altengartz.jpg");
var esanthai = new Foodfinder("Asian", "SW 10th & Alder", '45.520928',' -122.681479',"E-San Thai Cart", "./img/esanthai.jpg");
var numberOneBento = new Foodfinder("Asian", "SW 10th & Alder",'45.520813', '-122.681513', "Number 1 Bento", "./img/numberOneBento.jpg");
var wolfandbear = new Foodfinder("American", "SW 10th & Washington",'45.521173',' -122.681429', "Wolf and Bear", "./img/wolfandbear.jpg");
var zendako = new Foodfinder("Asian","SW 10th & Washington",'45.521126', '-122.681202', "Zendako", "./img/zendako.jpg");
var bingMi = new Foodfinder("Asian","SW 9th & Alder",'45.520533', '-122.680810', "Bing Mi", "./img/bingMi.jpg");
var baghdadiraqi =  new Foodfinder("Middle Eastern","SW 10th & Washington",'45.521192', '-122.681206', "Baghdad Iraqi Grill", "./img/baghdadiraqi.png");
var sawasdeeThai = new Foodfinder("Asian","SW 9th & Alder",'45.520593', '-122.680961', "Sawasdee Thai", "./img/sawasdeeThai.jpg");
var theFryingScotsman = new Foodfinder("American","SW 9th & Alder", '45.520766', '-122.680722',"The Frying Scotsman", "./img/theFryingScotsman.jpg");
var marcoPoloSandwiches = new Foodfinder("American","SW 9th & Washington",'45.520874', '-122.680625', "Marco Polo's Sandwiches", "./img/marcoPoloSandwiches.jpg");
var rollingGourmetFusion = new Foodfinder("Asian","SW 9th & Washington",'45.521005', '-122.680851', "Rolling Gourmet Fusion", "./img/rollingGourmetFusion.jpg");
var samsSaj = new Foodfinder("Middle Eastern","SW 10th & Washington",'45.521127', '-122.681345', "Sam's Saj", "./img/samsSaj.jpg");
var titosBurritos = new Foodfinder("Mexican", "SW 9th & Alder",'45.520662', '-122.681330', "Tito's Burritos", "./img/titosBurritos.jpg");
var wholeBowl = new Foodfinder("American","SW 9th & Alder",'45.520560', '-122.681098', "The Whole Bowl", "./img/wholeBowl.jpg");
var gyroPlace = new Foodfinder("Middle Eastern","SW 10th & Washington",'45.520499', '-122.680814', "Gyro King", "./img/gyroKing.jpg");
var euroDish = new Foodfinder("American", "SW 10th & Alder", '45.520730', '-122.681646',"Eurodish", "./img/euroDish.jpg");
var nongsKhao =  new Foodfinder("Asian","SW 10th & Alder", '45.520809', '-122.682025',"Nong's Khao Man Gai", "./img/nongsKhao.jpg");
var annaThaiBasil = new Foodfinder("Asian", "SW 10th & Alder", '45.520807', '-122.681595',"Anna Thai Basil", "./img/annaThaiBasil.jpg");
var alMawj = new Foodfinder("Middle Eastern","SW 10th & Alder",'45.520898', '-122.681554', "Al Mawj", "./img/alMawj.jpg");
var grilledCheeseGrill =  new Foodfinder("American","SW 10th & Alder",'45.521039','-122.681393', "The Grilled Cheese Grill", "./img/grilledCheeseGrill.jpg");
var chezDodo = new Foodfinder("Asian","427 SW Stark St", '45.520716', '-122.675988', "Chez Dodo", "./img/chezDodo.jpg");
var caribbeanKitchen = new Foodfinder("American","429 SW Stark St", '45.520739', '-122.676055', "Caribbean Kitchen", "./img/caribbeanKitchen.jpg");
var kingslandKitchen = new Foodfinder("American","SW Oak & 5th",' 45.521267', '-122.675605', "Kingsland Kitchen", "./img/kingslandKitchen.jpg");
var laJarochita = new Foodfinder("Mexican","SW 5th Ave & Stark St", '45.521295', '-122.676080', "La Jarochita", "./img/laJarochita.jpg");
var veliThai = new Foodfinder("Asian", "335 SW 5th Ave",'45.520946', '-122.676276', "Veli Thai", "./img/veliThai.jpg");
var stumptownSliders = new Foodfinder("American", "410 SW Oak St",'45.521286', '-122.675670', "Stumptown Sliders", "./img/stumptownSliders.jpg");
var donPedro = new Foodfinder("Mexican","340 SW 5th", '45.521009', '-122.676201', "Don Pedro", "./img/donJalapeno.jpg");
var broDogs = new Foodfinder("Americans","340 SW 5th Ave", '45.521142', '-122.676108', "Bro-Dogs", "./img/broDogs.jpg");
var babylonIraqi = new Foodfinder("Middle Eastern","340 SW 5th Ave", '45.520739', '-122.676055', "Babylon Iraqi", "./img/babylonIraqi.jpg");
var koreanTwist = new Foodfinder("Asian","SW 5th Ave & Oak St", '45.521324', '-122.676041', "Korean Twist", "./img/koreanTwist.jpg");
var realTasteOfIndia = new Foodfinder("Middle Eastern","111 SW 5th Ave", '45.520881', '-122.676298', "Real Taste of India", "./img/realTasteOfIndia.jpg");
var steaksFifthAvenue = new Foodfinder("American","SW 5th & Oak", '45.521192', '-122.676125', "Steaks Fifth Avenue", "./img/steaksFifthAvenue.jpg");
var hawaiianGrill = new Foodfinder("American","SW 5th And Stark", '45.520950', '-122.676247', "Hawaiian Grill", "./img/hawaiianGrill.jpg");
var schnitzelwich = new Foodfinder("American","433 SW Stark St", '45.520753', '-122.676164', "Schnitzelwich", "./img/tabor.jpg");
var keeMaoThai = new Foodfinder("Asian","", '45.521353', '-122.676048', "Kee Mao Thai Food Cart", "./img/thaiKeeMao.jpg");
var thaiSky = new Foodfinder("Asian","340 SW 5th Ave", '45.521371', '-122.676030', "Thai Sky", "./img/thaiSky.jpg");
var wagsyHotBeef = new Foodfinder("American","SW 5th And Oak St", '45.521314', '-122.675734', "Wagsy's Hot Beef Sandwiches", "./img/wagsyHotBeef.jpg");
var khobKhun = new Foodfinder("Asian","SW 5th Ave & Stark St",'45.521048', '-122.676142', "Khob Khun", "./img/khobKhun.png");
var pretzelBakery = new Foodfinder("American","SW 5th Ave", '45.521153', '-122.676157', "Portland Pretzel Bakery", "./img/missing-photo.png");
var shawarmaStar = new Foodfinder("Middle Eastern","324 SW 5th Ave", '45.521242', '-122.676112', "Shawarma Star", "./img/missing-photo.png");
var banMi = new Foodfinder("Asian","324 SW 5th Ave", '45.520795', '-122.676225', "Condenz Banh Mi", "./img/missing-photo.png");
var moonlightMediterranean = new Foodfinder("Middle Eastern","232 SW Stark Ave", '45.520182','-122.674344',  "Moonlight Mediterranean Food", "./img/moonlightMediterranean.jpg");
var mamaChowsKitchen = new Foodfinder("Asian", "300 SW 2nd Ave", '45.520244','-122.673548', "Mama Chow's Kitchen", "./img/mamaChowsKitchen.jpg");
var donJalapeno = new Foodfinder("Mexican", "421 SW 3rd Ave", '45.519927','-122.674522', "Don Jalapeno", "./img/donJalapeno.jpg");
var theFrenchToastConnection = new Foodfinder("American", "321 SW 2nd Ave", '45.520053','-122.673494', "The French Toast Connection", "./img/theFrenchToastConnection.jpg");
var dcVegetarian = new Foodfinder("American", "430 SW 3rd Ave", '45.519788','-122.674083', "DC Vegetarian", "./img/dcVegetarian.jpg");
var elmasry = new Foodfinder("Middle Eastern", "SW 3rd Ave & SW Washington St", '45.519926','-122.674461', "Elmasry", "./img/elmasry.jpg");
var culturedCaveman = new Foodfinder("American", "SW 3rd Ave & Stark Ave", '45.520119','-122.674168', "Cultured Caveman", "./img/culturedCaveman.jpg");
var honeyThaiFood = new Foodfinder("Asian", "232 SW Washington Street",' 45.519583','-122.674507', "Honey Thai Food", "./img/honeyThaiFood.jpg");
var elPilon = new Foodfinder("Mexican", "SW 2nd & Oak", '45.520442','-122.673216', "El Pilon", "./img/elPilon.jpg");
var phatBlueBuddha = new Foodfinder("Middle Eastern", "498 SW 3rd Ave", '45.519598','-122.674680', "Phat Blue Buddha", "./img/phatBlueBuddha.jpg");
var casablancaCuisine = new Foodfinder("Middle Eastern", "426 SW 3rd Ave", '45.520042','-122.674501', "Casablanca Cuisine", "./img/casablancaCuisine.jpg");
var welcomeToMediterraneanCuisine = new Foodfinder("Middle Eastern", "426 SW 3rd Ave", '45.520042','-122.674533', "Welcome to Mediterranean Cuisine", "./img/welcomeToMediterraneanCuisine.jpg");
var taqueriaVillanueva = new Foodfinder("Mexican", "SW 3rd Ave And Sw Oak St", '45.521057','-122.674080', "Taqueria Villanueva", "./img/taqueriaVillanueva.jpg");
var rayaMiddleEastFood = new Foodfinder("Middle Eastern", "400-446 SW 3rd Ave", '45.520218','-122.674437', "Raya Middle East Food", "./img/rayaMiddleEastFood.jpg");
var friendlyFood = new Foodfinder("Middle Eastern", "421-429 SW 2nd Ave", '45.519672','-122.674699', "Friendly Food", "./img/friendlyFood.jpg");
var asianStation = new Foodfinder("Asian", "SW Oak St", '45.520394','-122.673418', "Asian Station", "./img/asianStation.jpg");
var justThai = new Foodfinder("Asian", "SW 3rd & Stark", '45.520435','-122.674455', "Just Thai", "./img/justThai.jpg");
var buddyBearTartHouse = new Foodfinder("American", "432 SW 3rd Ave", '45.520133','-122.674389', "Buddy Bear Tart House", "./img/buddyBearTartHouse.jpg");

var directory = [chezDodo, dumpTruck, caribbeanKitchen, kingslandKitchen, laJarochita, veliThai, stumptownSliders, donJalapeno, broDogs, babylonIraqi, koreanTwist, realTasteOfIndia, steaksFifthAvenue, hawaiianGrill, schnitzelwich, keeMaoThai, thaiSky, wagsyHotBeef, khobKhun, pretzelBakery, shawarmaStar, banMi, smallPharaoh, laPinataTakos, koiFusion, altengartz, esanthai, numberOneBento, wolfandbear, zendako, bingMi, baghdadiraqi, sawasdeeThai, theFryingScotsman, marcoPoloSandwiches, rollingGourmetFusion, samsSaj, titosBurritos, wholeBowl, gyroPlace, euroDish, nongsKhao, annaThaiBasil, alMawj, grilledCheeseGrill, buddyBearTartHouse, justThai, asianStation, friendlyFood, rayaMiddleEastFood, taqueriaVillanueva, welcomeToMediterraneanCuisine, casablancaCuisine, phatBlueBuddha, elPilon, honeyThaiFood, culturedCaveman, elmasry, dcVegetarian, theFrenchToastConnection, donJalapeno, mamaChowsKitchen, moonlightMediterranean];

// UI Logic
$(document).ready(function(){
 $(".btn").click(function(event){
      event.preventDefault();
      var userInput = $("#foodType").val();
      var randomSelection = randomFoodCart(userInput);
      $('.name').html(randomSelection.truck);
      $('.image').html('<img src='+ randomSelection.img +'  alt="restaurant" style="width:304px;height:228px;">');
      $('.address').html(randomSelection.location);
      function myMap() {
        var mapCanvas = document.getElementById("map");
        var myCenter = new google.maps.LatLng(randomSelection.lat,randomSelection.long);
        var mapOptions = {center: myCenter, zoom: 20};
        var map = new google.maps.Map(mapCanvas,mapOptions);
        var marker = new google.maps.Marker({
          position: myCenter,
          animation: google.maps.Animation.BOUNCE
        });
        marker.setMap(map);
      }
      myMap();
      $("#myModal").modal("show")
      $('#myModal').on('shown.bs.modal', function () {
          google.maps.event.trigger(map, "resize");
      });
    });
    $("#check-list").click(function(event) {
      event.preventDefault();
      directory.forEach(function(object) {
  $("#results2").append('<div class="panel container" id="list"><div class="panel-header"></div><div class="panel-body"><div class="row container"><div class="col-xs-8"><p id="directoryList">' + '<img src='+ object.img +' alt="restaurant" class="picture">' + "&nbsp" + '<strong>' + object.truck + '</strong>' + "&nbsp" + object.location + '</p></div></div></div></div>');
});
      function initMap() {
      var mapCanvas = document.getElementById('results1');
      var mapOptions = {center: new google.maps.LatLng(45.520645, -122.677189), zoom:17 };
    	var map = new google.maps.Map(mapCanvas, mapOptions);

    	var infowindow = new google.maps.InfoWindow({});

    	var marker;

    	for (var i = 0; i < directory.length; i++) {
    		marker = new google.maps.Marker({
    			position: new google.maps.LatLng(directory[i].lat, directory[i].long),
    			map: map
    		});

    		google.maps.event.addListener(marker, 'click', (function (marker, i) {
    			return function () {
    				infowindow.setContent(directory[i].truck);
    				infowindow.open(map, marker);
    			}
    		})(marker, i));
    	}
    }
      initMap();

      $("#main").hide();
      $("#results1").show();
      $("#results2").show();
      google.maps.event.trigger(map, "resize");
    });
});
