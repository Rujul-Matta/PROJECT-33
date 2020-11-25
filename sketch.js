var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var molecules;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var count = 5;
var game = "play"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  
  ground_1 = new Ground(width - 5 ,height/2 ,1.5 ,height);
  ground_2 = new Ground(5 ,height/2 ,1.5 ,height);
  ground_3 = new Ground(width/2, 5, width,1.5);




   for (var k = 0; k <=width; k = k + 75) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    
    
}
 


function draw() {
  background("black");

  Engine.update(engine);

  textSize(35);
  text("Score = " + score, 25,50);
  text("Chances = " + count, 525,50);
  // text(mouseX + "," + mouseY, 325,350);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   declaringScore();
   giving();

   if(game === "end" || game != "play"){
     textSize(75);
     text("Game Over", 250, 350);
   }
}



function declaringScore(){
  textSize(25);

  x1 = 25;
  y1 = 675;

  text("100", x1 - 10, y1);
  text("150", x1 + 65, y1);
  text("200", x1 + 135, y1);
  text("250", x1 + 215, y1);
  text("300", x1 + 290, y1);
  text("350", x1 + 365, y1);
  text("400", x1 + 440, y1);
  text("450", x1 + 515, y1);
  text("500", x1 + 590, y1);
  text("550", x1 + 665, y1);
  text("600", x1 + 730, y1);
}

function mousePressed(){
  if(game === "play"){
    count--;
    molecules= new particle(mouseX ,10, 10, 10);
    if(count <= 0) game = "end" 
  }
  
}

function giving(){
  if(game =="play"){
  if(molecules != null){
    pos = molecules.body.position
     molecules.display();
     if (molecules.body.position.y > 760) {
       if (pos.x < 75) {
         score += 100;
         molecules = null;
         if(count >= 5) game = "end" 
       }
       if(pos.x > 75 && pos.x < 150){
         score += 150;
         molecules = null;
         if(count >= 5) game = "end" 
       }
       if(pos.x > 150.5 && pos.x < 225){
        score += 200;
        molecules = null;
        if(count >= 5) game = "end"
      }
      if(pos.x > 255 && pos.x < 300){
        score += 250;
        molecules = null;
        if(count >= 5)game = "end"
      }
      if(pos.x > 300 && pos.x < 375){
        score += 300;
        molecules = null;
        if(count >= 5) game = "end"
      }
      if(pos.x > 375 && pos.x < 450){
        score += 350;
        molecules = null;
        if(count >= 5)game = "end"
      }
      if(pos.x > 450 && pos.x < 525){
        score += 400;
        molecules = null;
        if(count >= 5)game = "end"
      }
      if(pos.x > 525 && pos.x < 600){
        score += 450;
        molecules = null;
        if(count >= 5)game = "end"
      }
      if(pos.x > 600 && pos.x < 675){
        score += 500;
        molecules = null;
        if(count >= 5) game = "end"
      }
      if(pos.x > 675 && pos.x < 750){
        score += 550;
        molecules = null;
        if(count >= 5) game = "end"
      }
      if(pos.x > 750 && pos.x < 825){
        score += 600;
        molecules = null;
        if(count >= 5){
          game = "end"
        }
      }
    }
     }
   }
}