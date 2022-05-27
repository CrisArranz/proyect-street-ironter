class Game {
    constructor(idCanvas) {
        this.context = document.getElementById(idCanvas).getContext('2d');
        this.player1 = new Ken(this.context, (this.context.canvas.width / 2) - 254, this.context.canvas.height - 150);
        // this.player2 = new Ken(this.context, (this.context.canvas.width / 2) + 146, this.context.canvas.height - 150, 'animationMirrorStopped');
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.draw();
        }, 1000 / 6)

        // setTimeout(() => {
        //     requestAnimationFrame(this.draw);
        // },1000 / 8)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    draw() {
        this.player1.clear();
        this.player1.draw();
        // this.player2.draw();
    }
}