// === Drum Kit Sound Map ===
const SOUND_MAP = {
  w: "./sounds/crash.mp3",
  a: "./sounds/kick-bass.mp3",
  s: "./sounds/snare.mp3",
  d: "./sounds/tom-1.mp3",
  j: "./sounds/tom-2.mp3",
  k: "./sounds/tom-3.mp3",
  l: "./sounds/tom-4.mp3"
};

// === Initialize Drum Kit Event Listeners ===
const initDrumKit = () => {
  // Keyboard listener
  document.addEventListener("keydown", ({ key }) => handleInteraction(key));

  // Mouse click listener
  document.querySelectorAll(".kit").forEach(button =>
    button.addEventListener("click", () => {
      const key = button.innerHTML.toLowerCase();
      handleInteraction(key);
    })
  );
};

// listening when clicked using mouse
const kitButtons = document.querySelectorAll(".kit");
kitButtons.forEach((button) => {
    button.addEventListener("click", function() {
        const key = this.innerHTML.toLowerCase();
        playSound(key);
        animateBtn(key);
    });
});

// play the sound based on the key listned
function playSound(key) {
    const soundFile = soundMap[key];
    if (soundFile) {
        new Audio(soundFile).play();
    } else {
        console.log("no such key found with a sound");
    }
}

// animate the button whenever pressed
function animateBtn(key) {
    const btn = document.getElementById(key);
    if (btn) {
        btn.classList.add("pressed");
        setTimeout(() => {
            btn.classList.remove("pressed");
        }, 100);
    }
} 