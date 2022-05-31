class AnimateSprite extends Picasso {
    constructor(context) {
        super(context);
    }

    drawCharacter(positionX, positionY, selectedCharacter, typeAnimation, spriteFrames) {
        if (this.prevTypeAnimation !== typeAnimation) {
            this.prevTypeAnimation = typeAnimation;
            this.frameCount = 0;
        }

        this.frames = frameImages[selectedCharacter][typeAnimation].length - 1;
        this.context.drawImage(
            spriteFrames,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].x,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].y,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].width,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].height,
            positionX,
            positionY,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].width,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].height
        );
        this.tick++;
        if (this.tick > 4) {
            this.tick = 0;
            if (this.frames > this.frameCount) {
                this.frameCount++;
            } else {
                if (
                    typeAnimation.includes('Jump') && frameImages[selectedCharacter][typeAnimation].length - 1 === this.frameCount ||
                    typeAnimation.includes('Special') && frameImages[selectedCharacter][typeAnimation].length - 1 === this.frameCount
                ) {
                    this.frameCount = frameImages[selectedCharacter][typeAnimation].length - 1
                } else {
                    this.frameCount = 0;
                }
            }
        }
    }

    drawSpecial(positionX, positionY, selectedCharacter, typeAnimation, spriteFrames){
        this.frames = frameImages[selectedCharacter][typeAnimation].length - 1;
        this.context.drawImage(
            spriteFrames,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].x,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].y,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].width,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].height,
            positionX,
            positionY,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].width,
            frameImages[selectedCharacter][typeAnimation][this.frameCount].height
        );
        this.tick++;
        if (this.tick > 20) {
            this.tick = 0;
            if (this.frames > this.frameCount) {
                this.frameCount++;
            } else {
                this.frameCount = 0;
            }
        }
    }

    drawAnimatedBackground(positionX, positionY, typeAnimation, spriteFrames) {
        this.frames = frameImages.background[typeAnimation].length - 1;
        this.context.drawImage(
            spriteFrames,
            frameImages.background[typeAnimation][this.frameCount].x,
            frameImages.background[typeAnimation][this.frameCount].y,
            frameImages.background[typeAnimation][this.frameCount].width,
            frameImages.background[typeAnimation][this.frameCount].height,
            positionX,
            positionY,
            frameImages.background[typeAnimation][this.frameCount].width,
            frameImages.background[typeAnimation][this.frameCount].height
        );
        this.tick++;
        if (this.tick > 150) {
            this.tick = 0;
            if (this.frames > this.frameCount) {
                this.frameCount++;
            } else {
                this.frameCount = 0;
            }
        }
    }
}