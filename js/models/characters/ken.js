class Ken extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'animationMirrorWaking'){
        super(
            context, 
            './assets/images/ken/sprite-ken-nomirror.png', 
            './assets/images/ken/sprite-ken-mirror.png', 
            'ken', 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/ken/hadouken.mp3')
        );        
    }
}