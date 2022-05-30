class Background{
    constructor(context) {
        this.context = context
        this.backgroundImg = new Image();
        this.backgroundImg.src = './assets/stage/stage-ironter.png'
        this.drawler = new Picasso(this.context);
    }

    draw() {
        this.backgroundImg.onload = () => {
            console.log(123);
            this.drawler.drawBackground(this.backgroundImg);
        }
    }
}