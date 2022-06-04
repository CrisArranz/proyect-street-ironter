class Game {
    constructor(idCanvas) {
        this.context = document.getElementById(idCanvas).getContext('2d');
        this.player1 = new Ryu(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        this.player2 = new Ken(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
        this.imageBackgroundAnimated = [];
        this.imageBackgroundStatic = [];
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 55, 310, 'firstPeople')) 
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 340, 302, 'secondPeople'));
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 420, 310, 'thirdPeople'));
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 620, 302, 'firstPeople'));
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 750, 310, 'thirdPeople'));
        this.imageBackgroundAnimated.push(new AnimatedBackground(this.context, 910, 300, 'secondPeople'));
        this.imageBackgroundStatic.push(new StaticBackground(this.context, 0, 0, 'sky'));
        this.imageBackgroundStatic.push(new StaticBackground(this.context, 0, 20, 'plain'));
        this.imageBackgroundStatic.push(new StaticBackground(this.context, 0, 352 , 'road'));

        this.messages = {};
        this.messages['ko'] = (new Message(this.context,'ko'));
        this.messages['timeout'] = (new Message(this.context,'timeout'));

        this.timer = new Timer(this.context);

        this.intervalId = null;
        this.fps = FPS;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.draw();
        }, 1000 / this.fps)
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    draw() {
        this.player1.clear();
        
        this.imageBackgroundStatic.forEach((background) => {
            background.draw();
        });
        this.imageBackgroundAnimated.forEach((background) => {
            background.draw();
        });
        if (!this.timer.duration || this.player1.live.live <= 0 || this.player2.live.live <= 0) {
            const interval = setInterval(() => {
                if (this.messages.ko.positionY > 200 || this.messages.timeout.positionY > 200) {
                    clearInterval(interval);
                }
                this.player1.clear();
                this.imageBackgroundStatic.forEach((background) => {
                    background.draw();
                });
                this.imageBackgroundAnimated.forEach((background) => {
                    background.draw();
                });
                !this.timer.duration ? this.messages.timeout.draw() : this.messages.ko.draw();
                this.timer.draw();
                this.player1.draw();
                this.player1.live.draw();
                this.player2.draw();
                this.player2.live.draw();
            }, 1000 / this.fps);
            this.stop();
        }
        this.timer.draw();
        this.player1.positionOponent = this.player2.positionX;
        this.player1.draw();
        this.player1.animate();
        this.player1.live.draw();
        this.player2.positionOponent = this.player1.positionX;
        this.player2.draw();
        this.player2.animate();
        this.player2.live.draw();
        this.player1.coolDownHabilities();
        this.player2.coolDownHabilities();
        this.player1.collision(this.player2);
        this.player2.collision(this.player1);
        if (this.player1.specialEffect.length) {
            this.player1.specialEffect.forEach((special) => {
                special.collision(this.player1, this.player2);
            })
        }
        if (this.player2.specialEffect.length) {
            this.player2.specialEffect.forEach((special) => {
                special.collision(this.player2, this.player1);
            })
        }
    }
}