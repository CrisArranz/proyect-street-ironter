class Special extends AnimatedSprite {
    constructor(context, positionX, positionY, typeAnimation, framesPicture, isMirrorring, status){
        super(context, positionX, positionY, framesPicture, typeAnimation, TICK_PER_SECOND.special, isMirrorring, status);
        this.prevPositionX = positionX;

        this.velocityX = this.isMirrorring ? -VELOCITY_HABILITY_SPECIAL_X : VELOCITY_HABILITY_SPECIAL_X;
    }

    draw() {
        super.draw();
    }

    move() {
        this.positionX += this.velocityX;
    }

    clearEffect() {
        return this.isMirrorring ? this.positionX > this.prevPositionX - ROUTE_HABILITY_SPECIAL : this.positionX < this.prevPositionX + ROUTE_HABILITY_SPECIAL
    }
}