class AnimatedBackground extends AnimatedSprite {
    constructor(context, positionX, positionY, typeAnimation, isMirroring) {
        super(
            context,
            positionX,
            positionY,
            frameImages['background'],
            typeAnimation,
            TICK_PER_SECOND.background,
            isMirroring,
            'animation'
        );
    }

    draw() {
        super.draw();
    }
}