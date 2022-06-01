class Picasso {
    constructor(context, positionX, positionY, framesPicture, typeAnimation, isMirrorring) {
        this.context = context;
        this.prevTypeAnimation = '';
        this.frameCount = 0;
        this.frames = 0;
        this.tick = 0;
        this.positionX = positionX;
        this.positionY = positionY;
        this.framesPicture = framesPicture;
        this.typeAnimation = typeAnimation;
        this.isMirrorring = isMirrorring;
    }
}