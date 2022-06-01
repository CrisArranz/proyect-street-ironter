class Ken extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'animationMirrorWaking'){
        super(
            context, 
            'ken', 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/ken/hadouken.mp3')
        );        
    }
}