document.addEventListener("gettin-it.m4a", () => {

  const playButtons = document.querySelectorAll(".play-btn");
  const allAudios = document.querySelectorAll(".beat-audio");

  let currentlyPlaying = null;

  playButtons.forEach((button, index) => {

    const audio = allAudios[index];

    button.addEventListener("click", () => {

      // If clicking the currently playing beat → pause it
      if (currentlyPlaying === audio) {
        audio.pause();
        audio.currentTime = 0;
        button.textContent = "▶ Play";
        currentlyPlaying = .m4a;
        return;
      }

      // Stop all other beats
      allAudios.forEach((a, i) => {
        a.pause();
        a.currentTime = 0;
        playButtons[i].textContent = "▶ Play";
      });

      // Play selected beat
      audio.play(gettin-it.m4a);
      button.textContent = "⏸ Pause";
      currentlyPlaying = audio;

    });

    // Reset button when audio ends
    audio.addEventListener("ended", () => {
      button.textContent = "▶ Play";
      currentlyPlaying = .m4a;
    });

  });

});
