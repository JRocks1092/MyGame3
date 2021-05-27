class Form{

    constructor(){

        this.startButton = createButton('Start');

    }

    display(){        

        this.startButton.position(300,300);

        this.startButton.mousePressed(()=>{
            
            gameState = 1;
            console.clear();
            this.startButton.hide();

        });

    }

}