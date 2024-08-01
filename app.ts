// Obtener elementos del DOM
const videoPlayer = document.getElementById('videoPlayer') as HTMLVideoElement;
const playPauseBtn = document.getElementById('playPauseBtn') as HTMLButtonElement;
const stopBtn = document.getElementById('stopBtn') as HTMLButtonElement;

// Función para reproducir o pausar el vídeo
function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = 'Play';
    }
}

// Función para detener el vídeo
function stopVideo() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    playPauseBtn.textContent = 'Play';
}

// Agregar eventos a los botones
playPauseBtn.addEventListener('click', togglePlayPause);
stopBtn.addEventListener('click', stopVideo);
