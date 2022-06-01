class StaticBackground extends StaticSprite {
    constructor(context) {
        super(context);
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/images/stage/stage-ironter.png'
    }

    draw() {
        this.drawBackground(this.backgroundImg, 'sky');
        this.drawBackground(this.backgroundImg, 'plain');
        this.drawBackground(this.backgroundImg, 'road');
    }
}