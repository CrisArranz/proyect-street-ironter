class Character extends AnimatedSprite {
    constructor(context, typeAnimation, positionX, positionY, powerAttacks, soundSpecial, framesPicture, isMirrorring, status) {
        super(context, positionX, positionY, framesPicture, typeAnimation, TICK_PER_SECOND.character, isMirrorring, status);

        this.velocityX = 0;
        this.prevPositionY = positionY;
        this.velocityY = 0;
        
        this.gravity = GRAVITY;

        this.specialEffect = [];

        this.movements = {
            leftPressed: false,
            upPressed: false,
            rightPressed: false,
            downPressed: false,
            punchPressed: false,
            kickPressed: false,
            superKickPressed: false,
            specialPressed: false
        }
        this.powerAttacks = powerAttacks;
        this.soundSpecial = soundSpecial;
        this.soundSpecial.volume = 0.5;

        this.coolDownTimer = JSON.parse(JSON.stringify(COOLDOWN_HABILITIES));
        this.coolDownSpecial = 0;
        this.coolDownSuperKick = 0;

        this.positionOponent = 0;

        this.live = new Live(this.context, positionX);
    }

    draw(){
        super.draw();
        this.animate();
        this.specialEffect.forEach((effect) => {
            effect.draw();
        });
    }

    clear(){
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }

    animate() {
        this.move();

        this.velocityY += this.gravity;
        this.positionY += this.velocityY;
        this.positionX += this.velocityX;

        this.specialEffect.forEach((effect) => {
            effect.move();
        });

        this.specialEffect = this.specialEffect.filter((effect) => effect.clearEffect());
        
        if (this.positionY >= this.prevPositionY) {
            this.positionY = this.prevPositionY;
            this.velocityY = 0;
        }

        if (this.positionX < 0) {
            this.positionX = 0;
        }

        if (this.positionX + WIDTH_CHARACTERS > this.context.canvas.width) {
            this.positionX = this.context.canvas.width - WIDTH_CHARACTERS;
        }

        if (this.positionY >= this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER) {
            this.positionY = this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER
            this.velocityY = 0;
        }

        if (this.positionY < 0) {
            this.velocityY = 0;
        }
    }

    move() {
        const soundPunch = SOUND_PUNCH;
        soundPunch.volume = 0.5;

        if (this.movements.leftPressed) {
            if (this.positionX >= 0) {
                this.velocityX = -VELOCITY_CHARACTER_X;
            } else {
                this.velocityX = 0;
            }
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Waking');
            }
        } else if (this.movements.rightPressed) {
            if (this.positionX < this.context.canvas.width - WIDTH_CHARACTERS) {
                this.velocityX = VELOCITY_CHARACTER_X;
            } else {
                this.velocityX = 0;
            }
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Waking');
            }
        } else if (this.movements.upPressed && this.velocityY === 0) {
            this.frameCount = 0;
            this.velocityY = -10;
            this.directionCharacter('Jump')
        } else if (this.movements.downPressed) {
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Bend');
            }
        } else if (this.movements.punchPressed) {
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Punch');
                soundPunch.play();
            }
        } else if (this.movements.kickPressed) {
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Kick');
                soundPunch.play();
            }
        } else if ((this.movements.superKickPressed || this.coolDownTimer.superKick !== COOLDOWN_HABILITIES.superKick) && this.coolDownTimer.superKick >= COOLDOWN_HABILITIES.superKick - CAST_HABILITY_DURATION) {
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('SuperKick');
                this.coolDownSuperKick = -0.1;
                soundPunch.play();
            }
        } else if ((this.movements.specialPressed || this.coolDownTimer.special !== COOLDOWN_HABILITIES.special) && this.coolDownTimer.special >= COOLDOWN_HABILITIES.special - CAST_HABILITY_DURATION) {
            if (!this.prevTypeAnimation.includes('Jump')) {
                this.directionCharacter('Special');
                this.coolDownSpecial = -0.1;
                this.soundSpecial.play();
                if (this.specialEffect.length === 0 && this.framesPicture.noMirror.animation.EffectHabilitySpecial) {
                    const effect = new Special(
                        this.context,
                        this.isMirrorring ? this.positionX - 60 : this.positionX + 60,
                        this.positionY,
                        'EffectHabilitySpecial',
                        this.framesPicture,
                        this.isMirrorring,
                        'animation'
                    );
                
                    this.specialEffect.push(effect);
                }
            }
        } else {
            if (!this.typeAnimation.includes('Jump')) {
                this.velocityX = 0;
                this.directionCharacter('Stopped');
            } else if (this.positionY === this.context.canvas.height - HEIGHT_BATTLEFIELD_CHARACTER) {
                this.directionCharacter('Stopped');
            }
        }
    }

    keyDownHandlerRight(event) {
        switch(event.keyCode){
            case KEY_RIGHTBOARD_LEFTPRESSED:
                this.movements.leftPressed = true;
            break;
            case KEY_RIGHTBOARD_UPPRESSED:
                this.movements.upPressed = true;
            break;
            case KEY_RIGHTBOARD_RIGHTPRESSED:
                this.movements.rightPressed = true;
            break;
            case KEY_RIGHTBOARD_DOWNPRESSED:
                this.movements.downPressed = true;
            break;
            case KEY_RIGHTBOARD_PUNCHPRESSED:
                this.movements.punchPressed = true;
            break;
            case KEY_RIGHTBOARD_KICKPRESSED:
                this.movements.kickPressed = true;
            break;
            case KEY_RIGHTBOARD_SUPERKICKPRESSED:
                this.movements.superKickPressed = true;
            break;
            case KEY_RIGHTBOARD_SPECIALPRESSED:
                this.movements.specialPressed = true;
            break;
        }
    }
    
    keyUpHandlerRight(event) {
        switch(event.keyCode){
            case KEY_RIGHTBOARD_LEFTPRESSED:
                this.movements.leftPressed = false;
            break;
            case KEY_RIGHTBOARD_UPPRESSED:
                this.movements.upPressed = false;
            break;
            case KEY_RIGHTBOARD_RIGHTPRESSED:
                this.movements.rightPressed = false;
            break;
            case KEY_RIGHTBOARD_DOWNPRESSED:
                this.movements.downPressed = false;
            break;
            case KEY_RIGHTBOARD_PUNCHPRESSED:
                this.movements.punchPressed = false;
            break;
            case KEY_RIGHTBOARD_KICKPRESSED:
                this.movements.kickPressed = false;
            break;
            case KEY_RIGHTBOARD_SUPERKICKPRESSED:
                this.movements.superKickPressed = false;
            break;
            case KEY_RIGHTBOARD_SPECIALPRESSED:
                this.movements.specialPressed = false;
            break;
        }
    }

    keyDownHandlerLeft(event) {
        switch(event.keyCode){
            case KEY_LEFTBOARD_LEFTPRESSED:
                this.movements.leftPressed = true;
            break;
            case KEY_LEFTBOARD_UPPRESSED:
                this.movements.upPressed = true;
            break;
            case KEY_LEFTBOARD_RIGHTPRESSED:
                this.movements.rightPressed = true;
            break;
            case KEY_LEFTBOARD_DOWNPRESSED:
                this.movements.downPressed = true;
            break;
            case KEY_LEFTBOARD_PUNCHPRESSED:
                this.movements.punchPressed = true;
            break;
            case KEY_LEFTBOARD_KICKPRESSED:
                this.movements.kickPressed = true;
            break;
            case KEY_LEFTBOARD_SUPERKICKPRESSED:
                this.movements.superKickPressed = true;
            break;
            case KEY_LEFTBOARD_SPECIALPRESSED:
                this.movements.specialPressed = true;
            break;
        }
    }
    
    keyUpHandlerLeft(event) {
        switch(event.keyCode){
            case KEY_LEFTBOARD_LEFTPRESSED:
                this.movements.leftPressed = false;
            break;
            case KEY_LEFTBOARD_UPPRESSED:
                this.movements.upPressed = false;
            break;
            case KEY_LEFTBOARD_RIGHTPRESSED:
                this.movements.rightPressed = false;
            break;
            case KEY_LEFTBOARD_DOWNPRESSED:
                this.movements.downPressed = false;
            break;
            case KEY_LEFTBOARD_PUNCHPRESSED:
                this.movements.punchPressed = false;
            break;
            case KEY_LEFTBOARD_KICKPRESSED:
                this.movements.kickPressed = false;
            break;
            case KEY_LEFTBOARD_SUPERKICKPRESSED:
                this.movements.superKickPressed = false;
            break;
            case KEY_LEFTBOARD_SPECIALPRESSED:
                this.movements.specialPressed = false;
            break;
        }
    }

    directionCharacter(action) {
        if (this.positionOponent > this.positionX) {
            this.isMirrorring = false;
        } else {
            this.isMirrorring = true;
        }
        this.typeAnimation = action;
    }

    coolDownHabilities() {
        this.coolDownTimer.special += this.coolDownSpecial;
        this.coolDownTimer.superKick += this.coolDownSuperKick;
        if (this.coolDownTimer.special <= 0 && this.coolDownTimer.special !== COOLDOWN_HABILITIES.special) {
            this.coolDownTimer.special = COOLDOWN_HABILITIES.special;
            this.coolDownSpecial = 0;
        }

        if (this.coolDownTimer.superKick <= 0 && this.coolDownTimer.superKick !== COOLDOWN_HABILITIES.superKick) {
            this.coolDownTimer.superKick = COOLDOWN_HABILITIES.superKick;
            this.coolDownSuperKick = 0;
        }
    }
}