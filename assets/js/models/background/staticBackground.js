class StaticBackground extends StaticSprite {
    constructor(context, positionX, positionY, typeAnimation, isMirroring) {
        super(
            context,
            positionX,
            positionY,
            frameImages['background'],
            typeAnimation,
            isMirroring,
            'static'
        );
    }

    draw() {
        super.draw();
    }
}