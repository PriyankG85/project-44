class Form {
    constructor() {
        this.input = createInput("").attribute("placeholder", "Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
        this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(400, 50);
        this.title.style('fontSize', '70px');
        this.title.style('color', 'orangered');
        this.title.style('fontFamily', 'sans-serif');
        this.input.position(580, 300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'aliceblue');
        this.input.style('border', '1px solid black');
        this.input.style('borderRadius', '4px');
        this.input.style('color', 'orangered');
        this.input.style('outline', 'none');
        this.button.position(635, 360);
        this.button.style('width', '100px');
        this.button.style('height', '30px');
        this.button.style('borderRadius', '10px');
        this.button.style('border', '1px solid orangered');
        this.button.style('color', 'orangered');
        this.button.style('fontSize', '18px');
        this.button.style('fontWeight', 'bold');
        this.button.style('background', 'lightblue');
        this.button.style('cursor', 'pointer');
        this.reset.position(1060, 560);
        this.reset.style('width', '86px');
        this.reset.style('height', '28px');
        this.reset.style('border', '1px solid black');
        this.reset.style('borderRadius', '8px');
        this.reset.style('background', 'pink');
        this.reset.style('fontSize', '15px');
        this.reset.style('cursor', 'pointer');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(500, 200);
            this.greeting.style('color', 'skyblue');
            this.greeting.style('fontFamily', 'sans-serif');
            this.greeting.style('font-size', '80px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}