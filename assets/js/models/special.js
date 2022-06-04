class Special extends AnimatedSprite {
    constructor(context, positionX, positionY, typeAnimation, framesPicture, isMirrorring, status){
        super(context, positionX, positionY, framesPicture, typeAnimation, TICK_PER_SECOND.special, isMirrorring, status);
        this.prevPositionX = positionX;
        this.alreadyHit = false;

        this.velocityX = this.isMirrorring ? -VELOCITY_HABILITY_SPECIAL_X : VELOCITY_HABILITY_SPECIAL_X;
    }

    draw() {
        super.draw();
    }

    move() {
        this.positionX += this.velocityX;
    }

    collision(player, oponent) {
        if (
            this.positionX <= oponent.positionX + WIDTH_CHARACTERS &&
            this.positionX + WIDTH_CHARACTERS > oponent.positionX && 
            this.positionY <= oponent.positionY + HEIGHT_CHARACTERS &&
            this.positionY + HEIGHT_CHARACTERS > oponent.positionY
        ) {
            oponent.live.live -= player.powerAttacks.special;
            oponent.positionX += oponent.positionX > player.positionX ? 1 : -1;
        }
    }

    clearEffect() {
        return this.isMirrorring ? this.positionX > this.prevPositionX - ROUTE_HABILITY_SPECIAL : this.positionX < this.prevPositionX + ROUTE_HABILITY_SPECIAL
    }
}