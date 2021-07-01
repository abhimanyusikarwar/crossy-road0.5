function preload(){

}
function setup(){
  for(var i=0;i < 6;i++)
  var bottomGrass1=createSprite(683,height-50-(i*400),width,grassHeight);
  if(1%2===0)
  {
    var road=createSprite(683,height-50-(i*400),grassHeight,width,300,)
    road.shapeColor="black"
  }
  bottomGrass1.shapeColor="grey"
  for(var i=0;i < 4;i++){
    cars=new Car(2);
    carGroup1.add(cars.spt);
  }
}
  
    

function draw(){
  background("blue");
  if(this.y==height-250||this.y==height-1050||this.y==height-1850){
    speed=-speed;
  }
  this.spt.velocityX=speed;
   for(i=1;i<logGroup1.length;i++){
     if(logGroup1[i].x<0){
       logGroup1[i].x=width;
     }
   }
   for(i=1;i<logGroup1.length;i++){
     if(logGroup1[i].x<0){
       logGroup1[i].x=width;
     }
   }

  drawSprites();
}

  

