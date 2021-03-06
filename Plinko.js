class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.image=loadImage("b.png");
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color=color(random(0,255))

        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};