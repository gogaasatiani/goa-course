let time = 10 * 60

const timerElement = document.getElementById('timer')

const countdown = setInterval(() => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

    timerElement.textContent = formattedTime

    time--

    if (time < 0) {
        clearInterval(countdown)
        timerElement.textContent = "time ended"
    }
}, 1000)