class Game {

    constructor() {
       

    }

    start() {

        gameState = 0; 
        dead = false;                 

    }

    gameManager(){

        if(gameState === 1){

            this.play();
        }
        if(gameState === 2){

            this.end();           

        }
    }

    display() {

        background(255, 255, 255);          

        player.display();        
    }
    play() {
                   
        smallAlien.dead();
        this.display();        
        player.playerMovements();                       

    }
    end(){

        console.log("hi");
        textSize(20);
        text("GAME OVER!", -300, 0);

    }
}