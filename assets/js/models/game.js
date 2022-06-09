class Game {
    constructor(idCanvas, selectedCharacters, selectedMode) {
        this.context = document.getElementById(idCanvas).getContext('2d');

        this.selectedCharacters = selectedCharacters;
        this.selectedMode = selectedMode;

        this.onGameOver = () => {}

        selectedCharacters.forEach((character, index) => {
            switch(character){
                case 'KEN':
                    if(!index){
                        this.player1 = new Ken(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    } else {
                        this.player2 = new Ken(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    }
                    break;
                case 'CHUNLI':
                    if(!index){
                        this.player1 = new Chunli(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    } else {
                        this.player2 = new Chunli(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    }
                    break;
                case 'RYU':
                    if(!index){
                        this.player1 = new Ryu(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    } else {
                        this.player2 = new Ryu(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    }
                    break;
                case 'HONDA':
                    if(!index){
                        this.player1 = new Honda(this.context, (this.context.canvas.width / 2) + START_LEFT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    } else {
                        this.player2 = new Honda(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER);
                    }
                    break;
            }
        })

        const playerUnknown = [
            new Chunli(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER),
            new Ken(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER), 
            new Ryu(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER), 
            new Honda(this.context, (this.context.canvas.width / 2) + START_RIGHT_SIDE, this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER)
        ];

        if (selectedCharacters.length === 1 && !selectedMode.toLowerCase().includes('practice')) {
            this.player2 = playerUnknown[Math.floor(Math.random() * playerUnknown.length)];
        }

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
        this.messages['timeover'] = (new Message(this.context,'time over'));

        this.timer = new Timer(this.context);

        this.intervalId = null;
        this.fps = FPS;

        this.randomSoundSelected = Math.floor(Math.random() * SOUNDS_GAME.battlefield.length);
    }

    start() {
        SOUNDS_GAME.battlefield[this.randomSoundSelected].volume = 0.3;
        SOUNDS_GAME.battlefield[this.randomSoundSelected].play();
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            if (!this.selectedMode.toLowerCase().includes('practice')) {
                this.evalCollitions();
            }
            this.checkFinale();
        }, 1000 / this.fps)
    }

    stop() {
        clearInterval(this.intervalId);
        SOUNDS_GAME.battlefield[this.randomSoundSelected].pause();
        this.intervalId = null;
    }

    clear(){
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    draw() {
        
        this.imageBackgroundStatic.forEach(background => background.draw());
        this.imageBackgroundAnimated.forEach(background => background.draw());

        this.timer.draw();

        this.player1.positionOponent = !this.selectedMode.toLowerCase().includes('practice') ? this.player2.positionX : this.context.canvas.width / 2;
        this.player1.draw();

        if (!this.selectedMode.toLowerCase().includes('practice')) {
            this.player2.positionOponent = this.player1.positionX;
            this.player2.draw();
            this.player2.coolDownHabilities();
        }
        
        this.player1.coolDownHabilities();
        if (!this.timer.duration || this.player1.live.live <= 0 || this.player2.live.live <= 0) {
            !this.timer.duration ? this.messages.timeover.draw() : this.messages.ko.draw();
        }
    }

    evalCollitions() {
        this.player2.collision(this.player1);
        this.player1.collision(this.player2);

        if (this.player2.specialEffect.length) {
            this.player2.specialEffect.forEach((special) => {
                special.collision(this.player2, this.player1);
            })
        }
        if (this.player1.specialEffect.length) {
            this.player1.specialEffect.forEach((special) => {
                special.collision(this.player1, this.player2);
            })
        }
    }

    checkFinale() {
        if (!this.timer.duration || this.player1.live.live <= 0 || this.player2.live.live <= 0) {
            const intervalId = setInterval(() => {
                this.clear();
                this.draw();
                if (this.messages.ko.positionY > 200 || this.messages.timeover.positionY > 200) {
                    if(!this.timer.duration) {
                        SOUNDS_GAME.timeover.play();
                    } else if(this.player1.live.live <= 0 || this.player2.live.live <= 0) {
                        SOUNDS_GAME.ko.play();
                    }
                    clearInterval(intervalId);
                    this.onGameOver();
                }
            }, 1000 / this.fps);

            this.stop();
        }
    }
}