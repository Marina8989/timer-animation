class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start() {
        console.log('Time to start the timer');
    }
}

const duration = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

const timer = new Timer(duration, start, pause);