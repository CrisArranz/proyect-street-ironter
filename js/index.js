window.addEventListener('DOMContentLoaded', () => {
    const game = new Game('canvasStreetIronter');
    game.start();

    document.addEventListener('keydown', (event) => {
        game.player1.keyDownHandlerRight(event);
        // game.player2.keyDownHandlerLeft(event);
    })

    document.addEventListener('keyup', (event) => {
        game.player1.keyUpHandlerRight(event);
        // game.player2.keyUpHandlerLeft(event);
    })
});