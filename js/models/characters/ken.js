class Ken extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'animationMirrorWaking'){
        super(context, './assets/ken/sprite-ken-nomirror.png', './assets/ken/sprite-ken-mirror.png', 'ken', typeAnimation, positionX, positionY);
    }
}