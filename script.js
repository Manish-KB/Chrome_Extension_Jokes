 myButton = document.getElementById("myButton");
 myButton.addEventListener("click", changeJoke);



fetch("https://icanhazdadjoke.com/slack").then(data =>
    data.json()).then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement');
        jokeElement.innerHTML = jokeText;
        myButton.style.visibility = "visible";
    });




function changeJoke() {
    myButton.style.visibility="hidden";
    innerh="<p id=\"jokeElement\"><img class=\"load\" src=\"loading.gif\" alt=\"loading\"></p>";
    
    jokeElement.innerHTML=innerh
    fetch("https://icanhazdadjoke.com/slack").then(data =>
        data.json()).then(jokeData => {
            const jokeText = jokeData.attachments[0].text;
            const jokeElement = document.getElementById('jokeElement');
            jokeElement.innerHTML = jokeText;
            myButton.style.visibility = "visible";
        });
}
