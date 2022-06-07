class Message {
    constructor(context, message) {
        this.context = context;
        this.positionX = this.context.canvas.width / 2 - WIDTH_MESSAGE_END[message.split(' ').join('')];
        this.positionY = 0;

        this.velocityY = VELOCITY_MESSAGE;
        this.message = message.toUpperCase();
        this.context.font = "bold 70px street-fighter";
    }

    draw() {
        this.move();
        this.context.beginPath();
        this.context.fillText(this.message, this.positionX, this.positionY);
        this.context.closePath();
    }

    move() {
        this.positionY += this.velocityY;
    }
}