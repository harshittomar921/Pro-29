class Ball{
   constructor(x,y,radius){
       var options={
           'resitution':1.0,
           'friction':1.0,
           'density':1.0,
       }
       this.body=Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
   }
   display()
   {
       var pos=this.body.position;
       fill(176,219,83);
       ellipseMode(CENTER);
       ellipse(pos.x,pos.y,this.radius)
   }
}