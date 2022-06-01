class AnimatedBackground extends AnimatedSprite {
    constructor(context, positionX, positionY, typeAnimation, isMirroring) {
        super(
            context,
            positionX,
            positionY,
            frameImages['background'],
            typeAnimation,
            TICK_PER_SECOND.background,
            isMirroring
        );
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/images/stage/stage-ironter.png'
    }

    draw() {
        super.draw(this.backgroundImg);
    }
}