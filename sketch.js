//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogSprite ;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  dogSprite.addImage("notHappy", dog );

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)){
WriteStock(foodS);
dogSprite.addImage("happyOne",happyDog);

}  
drawSprites();
  //add styles here
  text("Press UP arrow key to feed the dog", 400,70)
  stroke(12)
  color(0,0,255)
  font(algerian)
}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
x=0
  }else{
    x=x-1
  }
}




