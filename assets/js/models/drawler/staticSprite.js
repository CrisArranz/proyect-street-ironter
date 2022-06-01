class StaticSprite extends Picasso {
    constructor(context){
        super(context);
    }

    drawBackground(spriteFrames, typeBackground) {
        this.context.drawImage(
            spriteFrames, 
            frameImages['background'][typeBackground].xTrim,
            frameImages['background'][typeBackground].yTrim,
            frameImages['background'][typeBackground].widthTrim,
            frameImages['background'][typeBackground].heightTrim,
            frameImages['background'][typeBackground].xBackground,
            frameImages['background'][typeBackground].yBackground,
            this.context.canvas.width,
            frameImages['background'][typeBackground].heightBackground,
        )
    }
}