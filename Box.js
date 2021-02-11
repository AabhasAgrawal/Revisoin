class Box{

    constructor(newx,newy,newwidth,newheight){

        var options ={
            restitution: 1.0
        }

         this.body=Bodies.rectangle(newx,newy,newwidth,newheight,options);
         this.width = newwidth;
         this.height = newheight;
            


         World.add(world,this.body);                
    
    }   //End of constructor
    
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
         
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);



        fill(255);
        rect(0,0,this.width,this.height);
        pop();



    }

}