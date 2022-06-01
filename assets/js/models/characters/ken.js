class Ken extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'animationWaking', isMirrorring){
        super(
            context, 
            'ken', 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/ken/hadouken.mp3'),
            frameImages['ken'],
            isMirrorring
        );        
    }
}