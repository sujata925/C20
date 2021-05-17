var fixedrect,fixedrectImg
var movingrect,movingrectImg

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(200,400,50,50);
}

function draw() {
  background(255,255,255);
  
  movingrect.x=World.mouseX
  movingrect.y = World.mouseY

  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    &&movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2)
    {
      movingrect.shapeColor = "pink"
      fixedrect.shapeColor ="pink"
    }
    else{
      movingrect.shapeColor = "orange"
      fixedrect.shapeColor = "orange"
    }
  drawSprites();
}