class HeavyObject {

    constructor(x, y, width, height) {

       
        this.sprite = createSprite(x, y, width, height);

        this.sprite.setCollider("rectangle", 0, 0, width, height);
        this.width = width;
        this.height = height;         
        this.image = loadImage("Images/HeavyObject.png");
        this.addImage(image);
        
        HeavyObjectGroup.add(this.sprite);
    }

    fall(x, y){
        

        if(bulletGroup.isTouching(this.sprite)){

            this.velocityY = 10;

        }else{

            line(this.sprite.x, this.sprite.y, x, y);

        }

    }
}