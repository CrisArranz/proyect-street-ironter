class Picasso {
    constructor(context) {
        this.context = context;
        
        this.prevTypeAnimation = '';
        this.frameCount = 0;
        this.frames = 0;
        this.tick = 0;
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
                if (typeAnimation.includes('Jump') && frameImages[selectedCharacter][typeAnimation].length - 1 === this.frameCount) {
                    this.frameCount = frameImages[selectedCharacter][typeAnimation].length - 1
                } else {
                    this.frameCount = 0;
                }
            }
        }
    }

    drawBackground(spriteFrames) {
        this.context.drawImage(
            spriteFrames, 
            frameImages['background']['first'].x, 
            frameImages['background']['first'].y, 
            frameImages['background']['first'].width, 
            frameImages['background']['first'].height,
            0,
            0,
            this.context.canvas.width,
            this.context.canvas.height
        )
    }

    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}