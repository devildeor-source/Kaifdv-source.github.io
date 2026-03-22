const input = document.getElementById("message");
const hello = document.getElementById("hello");
const micBtn = document.getElementById("micBtn");
const sendBtn = document.getElementById("sendBtn");

/* Hide Hello when typing */

input.addEventListener("input", () => {

if(input.value.trim() !== ""){

hello.style.opacity = "0";

}else{

hello.style.opacity = "1";

}

});

/* Voice Recognition */

let recognition;

if ("webkitSpeechRecognition" in window) {

recognition = new webkitSpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";

micBtn.onclick = () => {

recognition.start();

};

recognition.onresult = (event) => {

input.value = event.results[0][0].transcript;

};

}

/* Send Button (for future backend API) */

sendBtn.onclick = () => {

let question = input.value.trim();

if(question === "") return;

console.log("User Question:", question);

/* Later we connect backend API here */

};
