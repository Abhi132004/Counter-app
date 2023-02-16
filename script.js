let count = 0;

function increment() {
    count++;
    document.getElementById('screen').innerHTML = count;
    document.getElementById("screen").style.fontSize = "8rem";
    document.getElementById("screen").style.color = "blue";
    if (count < 0) {
        document.getElementById("screen").style.color = "red";
    }

}

function decrement() {
    count--;
    if (count < 0) {
        document.getElementById("screen").style.color = "red";
    }
    document.getElementById('screen').innerHTML = count;
    document.getElementById("screen").style.fontSize = "8rem";
    document.getElementById("screen").style.color = "blue";
    if (count < 0) {
        document.getElementById("screen").style.color = "red";
    }
    if (count == 0) {
        document.getElementById("screen").style.color = "rgb(196, 26, 120)";
    }
}

function reset() {

    count = 0;

    document.getElementById('screen').innerHTML = count;
    document.getElementById("screen").style.fontSize = "8rem";
    document.getElementById("screen").style.color = "rgb(196, 26, 120)";
}