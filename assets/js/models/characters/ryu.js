class Ryu extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'Stopped', isMirrorring){
        super(
            context, 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/ryu/hadouken.wav'),
            frameImages['ryu'],
            isMirrorring,
            'animation'
        ); 
    }
}