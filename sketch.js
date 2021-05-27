var gameState;

var isToRight, moving;
var canvas;
var platFormGroup;
var giantAlienGroup, smallAlienGroup, bulletGroup, HeavyObjectGroup;
var Occupy;
var dead;

function preload() {



}

function setup() {

    canvas = createCanvas(displayWidth, displayHeight);
    platFormGroup = new Group();
    giantAlienGroup = new Group();
    smallAlienGroup = new Group();
    bulletGroup = new Group();
    HeavyObjectGroup = new Group();

    engine = Matter.Engine.create();

    game = new Game();
    world = engine.world;

    form = new Form();

    player = new Player(1200, 500);
    smallAlien = new SmallAlien(850, 970, 20, 20);

    p1 = new Platform(1375, 770, 1350, 260, false);
    p2 = new Platform(2400, 1450, 200, 1600, false);
    p3 = new Platform(1350, 1200, 230, 800, false);
    p4 = new Platform(2440, 500, 120, 650, false);
    p5 = new Platform(1600, 2190, 1800, 175, false);
    p6 = new Platform(2200, 1280, 200, 130, false);
    p7 = new Platform(350, 2650, 240, 1700, false);
    p8 = new Platform(4400, 3550, 8000, 600, false);
    p9 = new Platform(360, 1250, 100, 1675, false);
    p10 = new Platform(660, 720, 660, 112, false);
    p11 = new Platform(3375, 0, 2000, 350, false);
    p12 = new Platform(4110, 1200, 525, 2600, false);
    p13 = new Platform(3232, 2500, 160, 2000, false);
    p14 = new Platform(3160, 810, 950, 110, false);
    p15 = new Platform(5520, 1700, 755, 3600, false);
    p16 = new Platform(4850, 3150, 2000, 300, false);
    p17 = new Platform(5000, 2850, 300, 300, false);
    //p18 = new Platform(3200, 1200, 50, 800, false);

    lift1 = new Platform(3550, 2850, 600, 50, true);
    lift2 = new Platform(2800, 950, 600, 50, true);
    lift3 = new Platform(800, 1200, 600, 50, true);    

    bg = new Bg();



    game.start();
}

function draw() {

    background("#666666");

    Matter.Engine.update(engine);

    camera.position.x = player.sprite.x;
    camera.position.y = player.sprite.y;

    if (keyDown("space")) {

        camera.zoom = 1 / 1.5;

    } else {

        camera.zoom = 1;

    }

    gravity(smallAlien.sprite);
    /*gravity(smallAlien);
    gravity(smallAlien);*/

    movelift(lift1, 950, 2850, 5);
    movelift(lift2, 950, 3250, 5);
    movelift(lift3, 1200, 1800, 5);

    game.gameManager();

    drawSprite(bg.bg);

    drawSprites(smallAlienGroup);
    drawSprites(giantAlienGroup);
    drawSprites(platFormGroup);
    drawSprites(bulletGroup);
    drawSprites(HeavyObjectGroup);

    drawSprite(player.sprite);
    player.hand.display();


    textSize(100);
    stroke("red");
    text("x : " + (mouseX - displayWidth / 2 + player.sprite.x) + ";   y : " + (mouseY - displayHeight / 2 + player.sprite.y), (mouseX - displayWidth / 2 + player.sprite.x) - 100, (mouseY - displayHeight / 2 + player.sprite.y) - 100);
   
    drawSprite(bg.fire);
    drawSprite(bg.smoke);

    drawSprite(bg.rareElement);
    drawSprite(bg.spaceship);


    smallAlienGroup.collide(platFormGroup);
    giantAlienGroup.collide(platFormGroup);

    form.display();
}

function movelift(lift, y1, y2, vel) {

    if (lift.sprite.y <= y1) {

        lift.sprite.velocityY = vel;        

    }

    if (lift.sprite.y >= y2) {

        lift.sprite.velocityY = -vel;        
    }

}

function gravity(sprite){

    if(!sprite.isTouching(platFormGroup)){

        sprite.y+=7;

    }

}


