class Game {
    constructor(idCanvas) {
        this.context = document.getElementById(idCanvas).getContext('2d');
        this.player1 = new Ken(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        // this.player2 = new Ken(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        this.imageBackgroundAnimated = new AnimatedBackground(this.context);
        this.imageBackgroundStatic = new StaticBackground(this.context);
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
        this.imageBackgroundStatic.draw();
        this.imageBackgroundAnimated.draw();
        this.player1.draw();
        // this.player2.draw();
        this.player1.coolDownHabilities();
    }
}