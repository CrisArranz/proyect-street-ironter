class Timer {
    constructor(context) {
        this.context = context;
        this.duration = DURATION_FIGHT;
        this.context.font = "bold 70px street-fighter";
        this.tick = 0;
    }

    draw() {
        this.context.beginPath();
        this.context.fillText(this.duration.toString().padStart(2,0), 510, 60);
        this.context.closePath();

        this.calculateSeconds();
    }

    calculateSeconds() {
        this.tick++;
        if (this.tick > 70) {
            this.tick = 0;
            if (this.duration) {
                this.duration--;
            } else {
                this.duration = 0;
            }
            
        }
    }
}