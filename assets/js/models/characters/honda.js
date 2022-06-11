class Honda extends Character {
    constructor(context, positionX, positionY, typeAnimation = 'Stopped', isMirrorring){
        super(
            context, 
            typeAnimation, 
            positionX, 
            positionY, 
            POWER_ATTACKS,
            new Audio('./assets/sounds/honda/fatouken.wav'),
            frameImages['honda'],
            isMirrorring,
            'animation'
        ); 

        this.name = 'HONDA';
    }
}