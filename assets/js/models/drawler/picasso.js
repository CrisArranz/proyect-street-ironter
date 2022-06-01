class Picasso {
    constructor(context, positionX, positionY, framesPicture, typeAnimation, isMirrorring, status) {
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
        this.status = status;
        this.sprites = Object.keys(framesPicture.url).reduce((objectSprites, sprite) => {
            let spritePictures = new Image();
            spritePictures.src = framesPicture.url[sprite]
            objectSprites[sprite] = spritePictures;

            return objectSprites;
        },{})
    }

    draw(){
        const mode = this.isMirrorring ? 'mirror' : 'noMirror';
        const sprite = this.isMirrorring ? this.sprites.mirror : this.sprites.noMirror;

        this.context.drawImage(
            sprite,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].x,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].y,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].width,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].height,
            this.positionX,
            this.positionY,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].width,
            this.framesPicture[mode][this.status][this.typeAnimation][this.frameCount].height
        );
    }
}