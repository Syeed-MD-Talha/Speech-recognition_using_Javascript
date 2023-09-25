const texts = document.querySelector('.texts')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

function add(text, question, answer) {
    if (text.toLowerCase().includes(question)) { // Check if recognized speech contains 'hello'
        const replyP = document.createElement('p'); // Create a new <p> element for the reply
        replyP.classList.add('reply');
        replyP.innerText = answer;
        texts.appendChild(replyP);
        // window.open("https://www.youtube.com/")
    }
}


recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)[0][0].transcript;
    p.innerText = text;
    texts.appendChild(p);

    if (e.results[0].isFinal) {

        add(text, 'hello', 'HI');
        add(text, 'how old are you', "I'm 23 years old");
        add(text, "what's your name", 'My name is Talha')
        p = document.createElement('p'); // Create a new <p> element for the next recognized speech

    }
});

recognition.addEventListener('end', () => {
    recognition.start();
})

recognition.start();
