class Game {
    constructor(idCanvas) {
        this.context = document.getElementById(idCanvas).getContext('2d');
        this.player1 = new Ken(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        // this.player2 = new Ken(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        this.imageBackgroundAnimated1 = new AnimatedBackground(this.context, 55, 310, 'firstPeople');
        this.imageBackgroundAnimated2 = new AnimatedBackground(this.context, 340, 302, 'secondPeople');
        this.imageBackgroundAnimated3 = new AnimatedBackground(this.context, 420, 310, 'thirdPeople');
        this.imageBackgroundAnimated4 = new AnimatedBackground(this.context, 620, 302, 'firstPeople');
        this.imageBackgroundAnimated5 = new AnimatedBackground(this.context, 750, 310, 'thirdPeople');
        this.imageBackgroundAnimated6 = new AnimatedBackground(this.context, 910, 300, 'secondPeople');
        this.imageBackgroundStaticSky = new StaticBackground(this.context, 0, 0, 'sky');
        this.imageBackgroundStaticPlain = new StaticBackground(this.context, 0, 20, 'plain');
        this.imageBackgroundStaticRoad = new StaticBackground(this.context, 0, 352 , 'road');

        this.intervalId = null;
        this.fps = FPS;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.draw();
        }, 1000 / this.fps)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    draw() {
        this.player1.clear();
        this.imageBackgroundStaticSky.draw();
        this.imageBackgroundStaticPlain.draw();
        this.imageBackgroundStaticRoad.draw();
        this.imageBackgroundAnimated1.draw();
        this.imageBackgroundAnimated2.draw();
        this.imageBackgroundAnimated3.draw();
        this.imageBackgroundAnimated4.draw();
        this.imageBackgroundAnimated5.draw();
        this.imageBackgroundAnimated6.draw();
        this.player1.draw();
        //this.player2.draw();
        this.player1.coolDownHabilities();
    }
}