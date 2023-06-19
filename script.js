
fetch("https://icanhazdadjoke.com/slack").then(data =>
    data.json()).then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText
    });

const myButton = document.getElementById("myButton");
myButton.addEventListener("click", changeJoke);

function changeJoke() {
    fetch("https://icanhazdadjoke.com/slack").then(data =>
        data.json()).then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = jokeText
        });
}
