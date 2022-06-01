class AnimatedBackground extends AnimatedSprite {
    constructor(context) {
        super(context);
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/images/stage/stage-ironter.png'
    }

    draw() {
        this.drawAnimatedBackground(55, 310, 'firstPeople', this.backgroundImg);
        this.drawAnimatedBackground(340, 302, 'secondPeople', this.backgroundImg);
        this.drawAnimatedBackground(420, 310, 'thirdPeople', this.backgroundImg);
        this.drawAnimatedBackground(620, 302, 'firstPeople', this.backgroundImg);
        this.drawAnimatedBackground(750, 310, 'thirdPeople', this.backgroundImg);
        this.drawAnimatedBackground(910, 300, 'secondPeople', this.backgroundImg);
    }
}