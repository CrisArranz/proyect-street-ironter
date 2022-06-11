window.addEventListener('DOMContentLoaded', () => {

    let numberOfCharacters = 1;
    let countNumberOfCharacters = numberOfCharacters;

    SOUNDS_GAME.titleTheme.volume = 0.1;
    SOUNDS_GAME.titleTheme.play();

    const controls = document.querySelectorAll('.interface__actions-button');
    const isVisible = "is-visible";

    let arrayCharactersSelectd = [];

    let selectedMode = null;

    if (controls) {
        controls.forEach((control) => {
            control.addEventListener("click", () => {
                if (control.innerText === 'CONTROLS') {
                    document.getElementById('boardModal').classList.add(isVisible);
                }
                if (control.innerText === 'START') {
                    SOUNDS_GAME.selectedCharacter.play();
                    document.querySelector('.no-visible').classList.add('visible');
                    document.querySelector('.no-visible').classList.remove('no-visible');
                }
                Object.keys(GAME_MODES).forEach((mode) => {
                    if (control.innerText.toUpperCase() === mode.toUpperCase() || control.innerText.toUpperCase() === `${GAME_MODES[mode]} PLAYER`) {
                        numberOfCharacters = !GAME_MODES[mode] ? GAME_MODES[mode] + 1: GAME_MODES[mode];
                        selectedMode = mode;
                        SOUNDS_GAME.selectedCharacter.play();
                        SOUNDS_GAME.titleTheme.pause();
                        document.querySelector('.section__intro').classList.add('no-visible');
                        document.querySelector('.section__intro').classList.remove('visible');
                        document.querySelector('.section__selection-character').classList.add('visible');
                        document.querySelector('.section__selection-character').classList.remove('no-visible');
                        SOUNDS_GAME.selectionCharacter.volume = 0.1;
                        SOUNDS_GAME.selectionCharacter.play();
                    }
                })
            });
        });
    }

    const closeModal = document.getElementById("boardModalClose");
    if(closeModal){
        closeModal.addEventListener("click", () => {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);          
        });
    }

    document.addEventListener("click", e => {
        if (e.target === document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });

    const characters = document.querySelectorAll(".section__interface-images");
    if (characters) {
        characters.forEach((character) => {
            character.addEventListener('click', (event) => {
                document.querySelector('.section__interface-banners-player').innerText = `PLAYER ${countNumberOfCharacters}`;
                document.querySelector('.section__interface-banners-character').innerText = event.currentTarget.id.toUpperCase();
                arrayCharactersSelectd.push(event.currentTarget.id.toUpperCase());
                SOUNDS_GAME.selectedCharacter.play();
                if (countNumberOfCharacters === numberOfCharacters) {
                    setTimeout(() => {
                        SOUNDS_GAME.selectionCharacter.pause();
                        const game = new Game('canvas-street-ironter', arrayCharactersSelectd, selectedMode);
                        game.start();

                        game.onGameOver = onGameOver;
                
                        document.addEventListener('keydown', (event) => {
                            game.player1.keyDownHandlerLeft(event);
                            if (game.selectedMode.toLowerCase().includes('two_player')) {
                                game.player2.keyDownHandlerRight(event);
                            }
                        });
                
                        document.addEventListener('keyup', (event) => {
                            game.player1.keyUpHandlerLeft(event);
                            if (game.selectedMode.toLowerCase().includes('two_player')) {
                                game.player2.keyUpHandlerRight(event);
                            }
                        });

                        document.querySelector('.section__selection-character').classList.add('no-visible');
                        document.querySelector('.section__selection-character').classList.remove('visible');
                        document.querySelector('.container').classList.add('visible');
                        document.querySelector('.container').classList.remove('no-visible');
                        arrayCharactersSelectd = [];
                        numberOfCharacters = 1;
                        countNumberOfCharacters = numberOfCharacters;
                        selectedMode = null;
                        document.querySelector('.section__interface-banners-player').innerText = '';
                        document.querySelector('.section__interface-banners-character').innerText = '';
                    }, 1500)
                } else {
                    countNumberOfCharacters++;
                }
            })
        })
    }

});


function onGameOver() {
    setTimeout(() => {
        document.querySelector('.container').classList.add('no-visible');
        document.querySelector('.container').classList.remove('visible');
        document.querySelector('.section__intro').classList.add('visible');
        document.querySelector('.section__intro').classList.remove('no-visible');
        document.querySelector('.interface__actions-menu-players').classList.add('no-visible');
        document.querySelector('.interface__actions-menu-players').classList.remove('visible');
        SOUNDS_GAME.titleTheme.volume = 0.1;
        SOUNDS_GAME.titleTheme.play();
    }, 4000)
}