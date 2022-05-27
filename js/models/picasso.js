class Picasso {
    constructor(context, selectedCharacter, typeAnimation, spriteFrames, positionX, positionY) {
        this.context = context;
        this.selectedCharacter = selectedCharacter;
        this.typeAnimation = typeAnimation;
        this.spriteFrames = spriteFrames;
        this.positionX = positionX;
        this.positionY = positionY;
        this.frameCount = 0;
        this.frames = 0;
    }
    
    draw() {
        this.frames = frameImages[this.selectedCharacter][this.typeAnimation].length - 1;
        this.context.drawImage(
            this.spriteFrames,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].x,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].y,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].width,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].height,
            this.positionX,
            this.positionY,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].width,
            frameImages[this.selectedCharacter][this.typeAnimation][this.frameCount].height
        );
        if (this.frames > this.frameCount) {
            this.frameCount++;
        } else {
            this.frameCount = 0;
        }
    }

    clear() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}