class  Ironman {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 1
          };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("Ironman.png");
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
          World.add(world, this.body);
  
      }
      
      display()
      {
              
              var IronmanPos=this.body.position;		
              push()
              translate(IronmanPos.x, IronmanPos.y-100);
             
              imageMode(CENTER);
              image(this.image, 0,0,this.r+150, this.r)
              pop()
              
      }
  }
  