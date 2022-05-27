class Character {
    constructor(context, spriteNoMirror, spriteMirror, selectedCharacter, typeAnimation, positionX, positionY) {
        this.context = context;
        this.spriteNoMirror = new Image();
        this.spriteNoMirror.src = spriteNoMirror;
        this.spriteMirror = new Image();
        this.spriteMirror.src = spriteMirror;
        this.selectedCharacter = selectedCharacter;
        this.typeAnimation = typeAnimation;
        this.positionX = positionX;
        this.positionY = positionY;
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
        this.drawler = new Picasso(this.context, this.selectedCharacter, this.typeAnimation, this.typeAnimation.includes('Mirror') ? this.spriteMirror : this.spriteNoMirror, positionX, positionY);
    }

    draw(){
        this.drawler.draw();
    }

    clear(){
        this.drawler.clear();
    }

    keyDownHandlerRight(event) {
        switch(event.keyCode){
            case 37:
                this.movements.leftPressed = true;
            break;
            case 38:
                this.movements.upPressed = true;
            break;
            case 39:
                this.movements.rightPressed = true;
            break;
            case 40:
                this.movements.downPressed = true;
            break;
            case 97:
                this.movements.punchPressed = true;
            break;
            case 98:
                this.movements.kickPressed = true;
            break;
            case 99:
                this.movements.superKickPressed = true;
            break;
            case 96:
                this.movements.specialPressed = true;
            break;
        }
    }
    
    keyUpHandlerRight(event) {
        switch(event.keyCode){
            case 37:
                this.movements.leftPressed = false;
            break;
            case 38:
                this.movements.upPressed = false;
            break;
            case 39:
                this.movements.rightPressed = false;
            break;
            case 40:
                this.movements.downPressed = false;
            break;
            case 97:
                this.movements.punchPressed = false;
            break;
            case 98:
                this.movements.kickPressed = false;
            break;
            case 99:
                this.movements.superKickPressed = false;
            break;
            case 96:
                this.movements.specialPressed = false;
            break;
        }
    }

    keyDownHandlerLeft(event) {
        switch(event.keyCode){
            case 65:
                this.movements.leftPressed = true;
            break;
            case 87:
                this.movements.upPressed = true;
            break;
            case 68:
                this.movements.rightPressed = true;
            break;
            case 63:
                this.movements.downPressed = true;
            break;
            case 71:
                this.movements.punchPressed = true;
            break;
            case 72:
                this.movements.kickPressed = true;
            break;
            case 74:
                this.movements.superKickPressed = true;
            break;
            case 84:
                this.movements.specialPressed = true;
            break;
        }
    }
    
    keyUpHandlerLeft(event) {
        switch(event.keyCode){
            case 65:
                this.movements.leftPressed = false;
            break;
            case 87:
                this.movements.upPressed = false;
            break;
            case 68:
                this.movements.rightPressed = false;
            break;
            case 63:
                this.movements.downPressed = false;
            break;
            case 71:
                this.movements.punchPressed = false;
            break;
            case 72:
                this.movements.kickPressed = false;
            break;
            case 74:
                this.movements.superKickPressed = false;
            break;
            case 84:
                this.movements.specialPressed = false;
            break;
        }
    }
}