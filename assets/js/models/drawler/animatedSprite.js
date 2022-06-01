class AnimatedSprite extends Picasso {
    constructor(context, positionX, positionY, framesPicture, typeAnimation, tickPerSecond, isMirrorring, status) {
        super(context, positionX, positionY, framesPicture, typeAnimation, isMirrorring, status);
        this.tickPerSecond = tickPerSecond;
    }

    draw() {
        if (this.prevTypeAnimation !== this.typeAnimation) {
            this.prevTypeAnimation = this.typeAnimation;
            this.frameCount = 0;
        }

        const mode = this.isMirrorring ? 'mirror' : 'noMirror';

        this.frames = this.framesPicture[mode][this.status][this.typeAnimation].length - 1;
        super.draw();
        this.tick++;
        if (this.tick > this.tickPerSecond) {
            this.tick = 0;
            if (this.frames > this.frameCount) {
                this.frameCount++;
            } else {
                if (
                    this.typeAnimation.includes('Jump') && this.framesPicture[mode][this.typeAnimation].length - 1 === this.frameCount ||
                    this.typeAnimation.includes('Special') && this.framesPicture[mode][this.typeAnimation].length - 1 === this.frameCount
                ) {
                    this.frameCount = this.framesPicture[mode][this.typeAnimation].length - 1
                } else {
                    this.frameCount = 0;
                }
            }
        }
    }
}