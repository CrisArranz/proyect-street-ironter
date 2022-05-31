class Special extends AnimateSprite {
    constructor(context, positionX, positionY, typeAnimation, selectedCharacter, spriteFrames){
        super(context);
        this.positionX = positionX;
        this.prevPositionX = positionX;
        this.positionY = positionY;
        this.selectedCharacter = selectedCharacter;
        this.typeAnimation = typeAnimation.includes('Mirror') ? 'animationMirrorEffectHabilitySpecial' : 'animationEffectHabilitySpecial';
        this.spriteFrames = spriteFrames;

        this.velocityX = this.typeAnimation.includes('Mirror') ? -VELOCITY_HABILITY_SPECIAL_X : VELOCITY_HABILITY_SPECIAL_X;
    }

    draw() {
        this.drawSpecial(this.positionX, this.positionY, this.selectedCharacter, this.typeAnimation, this.spriteFrames);
    }

    move() {
        this.positionX += this.velocityX;
    }

    clearEffect() {
        return this.typeAnimation.includes('Mirror') ? this.positionX > this.prevPositionX - ROUTE_HABILITY_SPECIAL : this.positionX < this.prevPositionX + ROUTE_HABILITY_SPECIAL
    }
}