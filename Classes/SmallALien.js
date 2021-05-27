class SmallAlien {
    constructor(x, y, x1, y1) {

       
        this.sprite = createSprite(x, y, 100, 200);
        this.sprite.setCollider("rectangle", 0, -20, 100, 180);
        
        this.width = width;
        this.height = height; 
        this.sprite.shapeColor = "black";
        this.animation = loadAnimation("Images/Alien21.png");
        this.deadAnim = loadAnimation("Images/Alien21.png" , "Images/Alien22.png","Images/Alien33.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);
        this.vision = createSprite(x+x1, x+y1, x1*2, y1*2);
        this.vision.debug = true;
        this.isDead = false;
        this.active;        

        smallAlienGroup.add(this.sprite);
    }

    dead(){           
        

        if(bulletGroup.isTouching(this.sprite)){
           
            console.log("hi");
            this.sprite.changeAnimation("dead", this.deadAnim);                        
            //console.log(fr);
            if(this.sprite.animation.getFrame()===2){
                
                this.sprite.destroy();
                bulletGroup.destroyEach();

            }


        }else{

            this.sprite.changeAnimation("i", this.animation);

        }       
    }    
}