class Rain {
    constructor()
    {
      this.x = random(0,windowWidth);
      this.y = 0;
      this.R = 0;
      this.G = 0;
      this.B = 0;
      this.radius = 40;
      this.speedx= random(1,15);
      this.speedy= random(5, windowWidth)
      this.amplitude = 20;
      angleMode(DEGREES);
    }

    changeColor(red, green, blue)
    {
      strokeWeight(4);
      stroke(255,255,255, 40);
      fill(red, green, blue);
    }

    moveX(amp)
    {
      if(this.x > windowWidth || this.x < -20)
      {
        this.speedy= random(5, windowWidth);
        this.x = 0;
      }
      this.x += this.speedx;

    }
    moveY()
    {

      if(this.y > windowHeight|| this.y < -20)
      {
        this.y = 0;
      }
      this.y = 5*sin(this.x) + this.speedy;

    }
    show(amp, repelingForce)
    {
      push();
      this.amplitude = map(amp, 0,90, 0,100);
      this.moveX(repelingForce);
      this.moveY();
      amp = map(amp, 0,200, 100,255);
      this.changeColor(255, 50);
      this.radius = map(this.speedx, 1,5 ,2,11);
      var d = dist(this.y, this.x, windowWidth/2,windowHeight/2);
      console.log();

        while(d < repelingForce*0.9)
        {
          if(this.y >= windowWidth/2)
          {
            this.y+=1;
          }
          else
          {
            this.y-=1;
          }

          this.changeColor(255,0,0,255);
          d = dist(this.y, this.x, windowWidth/2,windowHeight/2);
        }
      ellipse(this.y,this.x,this.radius, this.radius);
      pop();
    }
  }
