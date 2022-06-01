class Picasso {
    constructor(context) {
        this.context = context;
        this.prevTypeAnimation = '';
        this.frameCount = 0;
        this.frames = 0;
        this.tick = 0;
    }

    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}