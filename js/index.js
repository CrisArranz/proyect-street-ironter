window.addEventListener('DOMContentLoaded', () => {
    const game = new Game('canvasStreetIronter');
    game.start();

    document.addEventListener('keydown', (event) => {
        game.player1.keyDownHandlerRight(event);
    })

    document.addEventListener('keyup', (event) => {
        game.player1.keyUpHandlerRight(event);
    })

});