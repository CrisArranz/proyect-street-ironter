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

    let controls = document.querySelectorAll('.interface__actions-button');
    const isVisible = "is-visible";

    controls.forEach((control) => {
        control.addEventListener("click", () => {
            if (control.innerText === 'CONTROLS') {
                document.getElementById('boardModal').classList.add(isVisible);
            }
            if (control.innerText === 'START') {
                document.querySelector('.no-visible').classList.add('visible');
                document.querySelector('.no-visible').classList.remove('no-visible');
            }
        });
    })

    const closeModal = document.querySelector("#boardModalClose");
    if(closeModal){
        closeModal.addEventListener("click", () => {
            this.parentElement.parentElement.parentElement.classList.remove(isVisible);          
        });
    }

    document.addEventListener("click", e => {
        if (e.target == document.querySelector(".modal.is-visible")) {
            document.querySelector(".modal.is-visible").classList.remove(isVisible);
        }
    });
});