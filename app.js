window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
        setTimeout(() => {
            key.classList.remove('playing');
        }, 100);
    }
});
