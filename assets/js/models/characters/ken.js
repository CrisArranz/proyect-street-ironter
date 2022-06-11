class Ken extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'Stopped', isMirrorring){
        super(
            context, 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/ken/hadouken.mp3'),
            frameImages['ken'],
            isMirrorring,
            'animation'
        ); 
        
        this.name = 'KEN';
    }
}