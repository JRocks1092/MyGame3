class GiantAlien {

    constructor(x, y, width, height,x1, y1) {

       
        this.sprite = createSprite(x, y);
        
        this.width = width;
        this.height = height; 
        this.animation = loadAnimation("Images/Alien1.png");
        this.deadAnim = loadAnimation("Images/Alien1.png" , "Images/Alien2.png","Images/Alien3.png", "Images/Alein4.png");
        this.sprite.addAnimation("i", this.animation);
        this.sprite.addAnimation("dead", this.deadAnim);
        this.vision = createSprite(x1, y1, x1*2, y1*2);        
        
        giantAlienGroup.add(this.sprite);
    }

    dead(){

        if(HeavyObjectGroup.isTouching(this.sprite)){
           
            console.log("hi");
            this.sprite.changeAnimation("dead", this.deadAnim);                        
            //console.log(fr);
            console.log(this.sprite.animation.getFrame());



            if(this.sprite.animation.getFrame()===3){
                
                this.sprite.destroy();                

            }


        }else{

            this.sprite.changeAnimation("i", this.animation);

        }       
       
    }
}