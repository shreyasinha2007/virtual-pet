//Create variables here
var dog, dogimg, happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodStock= database.ref('food').on("value", readStock)
  dogimg=loadImage("images/dogImg1.png");
  happyDog=loadImage("images/dogImg.png");
}


function draw() {  
 background(46, 139, 87) 
  
  //add styles here
  dog=image(dogimg,160,200,190,190);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog=image(happyDog,160,200,200,200);
  }
  fill(225);
  text("foodStock:" + foodStock, 50,50);
  text("note: press UP_ARROW to feed Drago milk!",100,100)
  
  drawSprites();
}
function readStock(data){
 foodS=data.val();
}

function writeStock(x){
 if (x<=0){
   x=0;
 } else {
   x=x-1;
 }
 database.ref('/').set({
   food : x
 })
}

