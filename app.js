let buttonCrea = document.getElementById("buttonCreer");

buttonCrea.addEventListener("click", ()=> {

    let heure = document.getElementById("heure").value;
    let minute = document.getElementById("minute").value;
    let seconde = document.getElementById("seconde").value;
    let divCrea = document.createElement("div");
    let buttonPlay = document.createElement("button");
    let buttonPause = document.createElement("button");
    buttonPause.innerHTML = "Stop"
    buttonPlay.className = "buttonReset";
    buttonPlay.innerHTML = "Play";


    let intervalId = setInterval(test, 1000);
    function test() {
        divCrea.innerHTML = `${heure} : ${minute} : ${seconde}`;
        seconde--;
        if (seconde < 0) {
            minute--;
            seconde = 59;
        }
        if (minute < 0 && heure > 0) {
            heure--;
            minute = 59;
        }
        if (heure === 0 && minute === 0 && seconde === 0) {
            clearInterval(intervalId);
        }
        buttonPause.addEventListener("click", ()=> {
            clearInterval(intervalId);
        });
        buttonPlay.addEventListener("click", ()=> {
            intervalId = setInterval(test, 1000);
        });
    }




    document.body.append(divCrea);
    document.body.append(buttonPlay);
    document.body.append(buttonPause);
});




