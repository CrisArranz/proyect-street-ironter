window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('canvas-street-ironter')) {
        const game = new Game('canvas-street-ironter');
        game.start();

        document.addEventListener('keydown', (event) => {
            game.player1.keyDownHandlerLeft(event);
            game.player2.keyDownHandlerRight(event);
        });

        document.addEventListener('keyup', (event) => {
            game.player1.keyUpHandlerLeft(event);
            game.player2.keyUpHandlerRight(event);
        });
    }

    const controls = document.querySelectorAll('.interface__actions-button');
    const isVisible = "is-visible";
    if (controls) {
        controls.forEach((control) => {
            control.addEventListener("click", () => {
                if (control.innerText === 'CONTROLS') {
                    document.getElementById('boardModal').classList.add(isVisible);
                }
                if (control.innerText === 'START') {
                    document.querySelector('.no-visible').classList.add('visible');
                    document.querySelector('.no-visible').classList.remove('no-visible');
                }
                if (control.innerText === '1 PLAYER') {
                    location.href = "./selectedCharacter.html";
                }
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
                document.querySelector('.section__interface-banners-character').innerText = event.currentTarget.id.toUpperCase();
            })
        })
    }

});