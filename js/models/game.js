class Game {
    constructor(idCanvas) {
        this.context = document.getElementById(idCanvas).getContext('2d');
        this.player1 = new Ken(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD);
        this.imageBackground = new Background();
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
        this.imageBackground.draw();
        this.player1.draw();
    }
}