class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trijectary=[];
    this.smokeimage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y];
    this.trijectary.push(position);
    } 
    for(var i=0;i<this.trijectary.length;i++){
      image(this.smokeimage,this.trijectary[i][0],this.trijectary[i][1])

    }

  }
}
