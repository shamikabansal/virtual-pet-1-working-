//Create variables here
var dog, doghappy;
var database;
var foodS, foodstock ;
var dogimg;
//var x;
//var feed, addFood;
//var foodObj;
//var fedTime, lastFed;





function preload()
{
dogimg = loadImage("images/dogimg.png");
happyDog = loadImage("images/dogimg1.png")
}

function setup() {

database = firebase.database();
 
createCanvas(500, 500);
  
 // foodObj = new Food();
 
  dog = createSprite(450,430,20,20);
  dog.addImage(dogimg); 
  dog.scale = 0.2;
  
  //database = firebase.database();
   
  foodstock = database.ref('Food');
  
  foodstock.on("value", readStock);

 // feed = createButton("Feed the dog");
  //feed.position(700, 95);
  //feed.mousePressed(feedDog);

  //addFood = createButton("Add Food");
  //addFood.position(800,95);
//  addFood.mousePressed(addFoods);
}


function draw() {  
  background(46,139,87);
  
 // foodObj.display();
 
  if(keyDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDog);
    } 
  
  drawSprites();  
 
  strokeWeight();
  stroke("red");
   
  textSize(30);
  fill("red");
  text("Food Remaining:" + foodS, 50,80); 

 /* fedTime = database.ref('FeedTime');
  fedTime.on("value", function (data) {
    lastFed = data.val();
  });

  textSize(15);
  if (lastFed >= 12) {
    text("Last Feed : " + lastFed % 12 + " PM", 350, 30);
  } else if (lastFed == 0) {
    text("Last Feed : 12 AM", 350, 30);
  } else {
    text("Last Feed : " + lastFed + " AM", 350, 30);
  }
*/

  
}



function readStock(data){
  foodS = data.val();
  textSize(30);
  fill("red");
  text("Reading food:" + foodS, 70,90); 
}

function writeStock(x) {
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food: x 
  })
}

/*function feedDog() {
  dog.addImage(doghappy);

  foodObj.deductFood();
  foodS--;
  var temp = foodObj.getFoodStock();

  database.ref('/').update({
    food: foodS
   // FeedTime: hour()
  })
}

/*function addFoods() {
  foodS++;
  database.ref('/').update({
    food: foodS
  })
}*/
