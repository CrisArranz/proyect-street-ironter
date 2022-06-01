class StaticSprite extends Picasso {
    constructor(context){
        super(context);
    }

    drawBackground(spriteFrames, typeBackground) {
        this.context.drawImage(
            spriteFrames, 
            frameImages['background']['noMirror'][typeBackground].xTrim,
            frameImages['background']['noMirror'][typeBackground].yTrim,
            frameImages['background']['noMirror'][typeBackground].widthTrim,
            frameImages['background']['noMirror'][typeBackground].heightTrim,
            frameImages['background']['noMirror'][typeBackground].xBackground,
            frameImages['background']['noMirror'][typeBackground].yBackground,
            this.context.canvas.width,
            frameImages['background']['noMirror'][typeBackground].heightBackground,
        )
    }
}