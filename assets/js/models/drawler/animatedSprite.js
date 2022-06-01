class AnimatedSprite extends Picasso {
    constructor(context, positionX, positionY, framesPicture, typeAnimation, tickPerSecond, isMirrorring) {
        super(context, positionX, positionY, framesPicture, typeAnimation, isMirrorring);
        this.tickPerSecond = tickPerSecond;
    }

    draw(spriteFrames) {
        if (this.prevTypeAnimation !== this.typeAnimation) {
            this.prevTypeAnimation = this.typeAnimation;
            this.frameCount = 0;
        }

        const mode = this.isMirrorring ? 'mirror' : 'noMirror';

        this.frames = this.framesPicture[mode][this.typeAnimation].length - 1;
        this.context.drawImage(
            spriteFrames,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].x,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].y,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].width,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].height,
            this.positionX,
            this.positionY,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].width,
            this.framesPicture[mode][this.typeAnimation][this.frameCount].height
        );
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