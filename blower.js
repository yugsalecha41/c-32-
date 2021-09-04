class Blower {
    constructor(x, y, w, h) {
        let options = {
        isstatic:true
        };
    
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        this.color=this.color
        World.add(world, this.body);
      }
    
      show() {
         // var angle=this.body.angle
        let pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("black");
        rect(0, 0, this.w, this.h);
        pop();
      }
    }