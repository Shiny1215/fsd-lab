class Game {
    constructor() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }
    start() {
        console.log('Guess the number between 1 and 100!');
    }
    checkGuess(guess) {
        this.attempts++;
        if (guess < this.randomNumber) {
            return 'Higher!';
        } else if (guess > this.randomNumber) {
            return 'Lower!';
        } else {
            console.log(`Correct! It took you ${this.attempts} attempts.`);
            this.reset();
        }
    }
    reset() {
        this.randomNumber = Math.floor(Math.random() * 100) + 1;
        this.attempts = 0;
    }
}
const game = new Game();
game.start();
console.log(game.checkGuess(50));
