class Bg{

    constructor(){

        this.bg = createSprite(3000,2000, 10, 10);
        this.image = loadImage("Images/BackGround.png");
        this.bg.addImage(this.image);
       
        this.fire = createSprite(3650,3250);
        this.fireAnimation = loadAnimation();
        this.fireAnimation.images[0] = loadImage("Images/Fire.png");
        this.fireAnimation.images[1] = loadImage("Images/Fire2.png");        
        this.fire.addAnimation("fire",this.fireAnimation); 
            

        this.smoke = createSprite(3150, 900);
        this.smokeAnimation = loadAnimation();
        this.smokeAnimation.images[0] = loadImage("Images/Smoke.png");
        this.smokeAnimation.images[1] = loadImage("Images/Smoke2.png");        
        this.smoke.addAnimation("smoke",this.smokeAnimation);  

        this.spaceship = createSprite(-100, 558);
        this.sanim = loadAnimation();
        this.sanim.images[0] = loadImage("Images/Ship1.png");
        this.sanim.images[1] = loadImage("Images/Ship2.png"); 
        this.spaceship.addAnimation("sanim",this.sanim);  
        this.spaceship.scale = 5;
        
        this.rareElement = createSprite(5000, 2500);
        this.ranim = loadAnimation();
        this.ranim.images[0] = loadImage("Images/RareElement1.png");
        this.ranim.images[1] = loadImage("Images/RareElement2.png");
        this.rareElement.addAnimation("ranim",this.ranim);   
    }   
}