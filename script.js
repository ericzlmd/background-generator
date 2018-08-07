var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
    // css.textContent 
}

// input => scans for input changes
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
// you can do onclick="" on the html file, but separation of concerns!

// BONUS! Add a random button to generate 
function numberGen() {
    // Mozilla Developer Network documentation 
    // 0 - 255
    return Math.floor(Math.random() * 256);
}

function generateRgb() {
    var a = numberGen();
    var b = numberGen();
    var c = numberGen();
    var bgColor = "rgb(" + a + ", " + b + ", " + c + ")";
    return bgColor;
}

function ranColors() {
    var grad1 = generateRgb();
    var grad2 = generateRgb();
    body.style.background = "linear-gradient(to right, " + grad1 + ", " + grad2 + ")";

    css.textContent = body.style.background + ";";
}

btn.addEventListener("click", ranColors);

// display and matches initial CSS linear gradient property on page load
window.onload = setGradient();