function updateCountdown() {
    const now = new Date();
    const nextChristmas = new Date(now.getFullYear(), 11, 25);

    if (now.getMonth() === 11 && now.getDate() > 25) {
        nextChristmas.setFullYear(now.getFullYear() + 1);
    }

    const timeRemaining = nextChristmas - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
