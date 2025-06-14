const kits = ["crash", "kick", "snare", "tom1", "tom2", "tom3", "tom4"];

const containerEelement = document.querySelector(".container");

kits.forEach((kit) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn");
    buttonElement.innerText = kit;
    containerEelement.appendChild(buttonElement);
    const audioElement = document.createElement("audio");
    audioElement.src = `sounds/${kit}.mp3`;
    containerElement.appendChild(audioElement);
    buttonElement.addEventListener("click", () => {
        audioElement.play();
    });
    window.addEventListener("keydown", (event) => {
        if(event.key === kit.slice(0, 1)) {
            audioElement.play();
            buttonElement.style.transform = "scale(.9)";
            setTimeout(() => {
                buttonElement.style.transform = "scale(1)";
            },100)
        }
    });
});