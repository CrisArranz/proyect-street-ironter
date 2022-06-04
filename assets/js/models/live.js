class Live {
    constructor(context, positionX) {
        this.context = context;
        this.live = 10000;
        this.sideLive = (context.canvas.width / 2) > positionX ? 'left' : 'right';

    }

    draw() {
        const prevLineWidth = this.context.lineWidth;
        const prevStyle = this.context.fillStyle;
        this.context.beginPath();
        this.context.lineWidth = 6;
        this.context.fillStyle = 'red';
        this.context.rect(POSITION_LIVES[this.sideLive].border.x, POSITION_LIVES[this.sideLive].border.y, 450, 20);
        this.context.fillRect(POSITION_LIVES[this.sideLive].fill.x, POSITION_LIVES[this.sideLive].fill.y, (0.0436 * this.live), 9);
        this.context.stroke();
        this.context.fillStyle = prevStyle;
        this.context.lineWidth = prevLineWidth;
        this.context.closePath();
    }

    restLive() {

    }
}