class Bullet {

    constructor(x, y, width, height) {
       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height; 
        this.sprite.shapeColor = "black";
        this.sprite.lifeTime = 200;
        
        bulletGroup.add(this.sprite);
    }

    checkDestroy(){

        if(this.sprite.isTouching(smallAlienGroup) || this.sprite.isTouching(platFormGroup)){

            this.sprite.destroy();

        }

    }
}