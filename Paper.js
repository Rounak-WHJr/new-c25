class Paper{
    constructor(x, y, r) {
        var options = {
            'restitution':0.2,
            'friction':0,
            'density':1.0
        }
        this.r= r;
        this.body = Bodies.circle(x, y, r, options);
       this.paperobj = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
    
        imageMode(CENTER);
        image(this.paperobj,0,0,this.r,this.r);
        pop();
      }
}