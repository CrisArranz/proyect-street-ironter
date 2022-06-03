class Chunli extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'Stopped', isMirrorring){
        super(
            context, 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/chunli/chunliouken.wav'),
            frameImages['chunli'],
            isMirrorring,
            'animation'
        ); 
    }
}