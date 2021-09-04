class Ball {
    constructor(x, y, w, h) {
      let options = {
       restituion:0.8
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }
  
    show() {
        var angle=this.body.angle
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle)
      ellipseMode(CENTER);
     // fill(this.color);
      ellipse(0, 0, this.w, this.h);
      pop();
    }
  }