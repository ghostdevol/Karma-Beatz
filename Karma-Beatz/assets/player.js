

// Auto-pause other tracks when one plays
document.addEventListener('DOMContentLoaded', () => {
    const audios = document.querySelectorAll('audio');
    
    audios.forEach(audio => {
        audio.addEventListener('play', () => {
            audios.forEach(other => {
                if (other !== audio && !other.paused) {
                    other.pause();
                }
            });
        });
    });

    // Add visual feedback on play
    audios.forEach(audio => {
        audio.addEventListener('play', () => {
            audio.closest('.beat-card').classList.add('playing');
        });
        
        audio.addEventListener('pause', () => {
            audio.closest('.beat-card').classList.remove('playing');
        });
    });
});