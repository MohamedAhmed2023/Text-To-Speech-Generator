let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelet = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelet.options[i] = new Option(voice.name, i)))
}

voiceSelet.addEventListener("change", () => {
    speech.voice = voices[voiceSelet.value]
})
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})