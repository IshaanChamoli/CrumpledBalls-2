class Paper 
{
  constructor(x, y,radius) 
  {
    var options = 
    {
        'restitution':0.8,
        'friction':0.3,
        'density':0.5
    }
    this.body = Bodies.circle(x, y, radius, options);
   
    this.radius = radius;
    this.image = loadImage("./paper.png");
    
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill ("purple")
    ellipseMode (RADIUS)
    //ellipse(0, 0, this.radius, this.radius);
imageMode (CENTER);
  image (this.image, 0, 0,  140, 140) ;
  
    pop();
  }
};
