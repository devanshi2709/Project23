class part {

constructor(x,y,width,height,angle){

var options ={

    isStatic= false
}
this.body= Bodies.rectangle(this.x,this.y,this.width,this.height,options);
World.add(world, this.body);

}

display(){
    var pos =this.body.position;
    
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
   /* rectMode(CENTER);
    rect(0, 0, this.width, this.height);*/
    pop();
}


}