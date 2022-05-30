class Background{
    constructor(context) {
        this.context = context
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/stage/stage-ironter.png'
        this.drawler = new Picasso(this.context);
    }

    draw() {
        this.drawler.drawBackground(this.backgroundImg, 'sky');
        this.drawler.drawBackground(this.backgroundImg, 'plain');
        this.drawler.drawBackground(this.backgroundImg, 'road');
        this.drawler.drawAnimatedBackground(55, 310, 'firstPeople', this.backgroundImg);
        this.drawler.drawAnimatedBackground(340, 302, 'secondPeople', this.backgroundImg);
        this.drawler.drawAnimatedBackground(420, 310, 'thirdPeople', this.backgroundImg);
        this.drawler.drawAnimatedBackground(620, 302, 'firstPeople', this.backgroundImg);
        this.drawler.drawAnimatedBackground(750, 310, 'thirdPeople', this.backgroundImg);
        this.drawler.drawAnimatedBackground(910, 300, 'secondPeople', this.backgroundImg);
    }
}