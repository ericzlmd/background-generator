const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const btn = document.querySelector("button");

// BONUS! Add a random button to generate 
// Mozilla Developer Network documentation 
// 0 - 255
const numberGen = () => Math.floor(Math.random() * 256);

const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

// input => scans for input changes
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

const generateRgb = () => "rgb(" + numberGen() + ", " + numberGen() + ", " + numberGen() + ")";

const ranColors = () => {
    body.style.background = "linear-gradient(to right, " + generateRgb() + ", " + generateRgb() + ")";

    css.textContent = body.style.background + ";";
}

btn.addEventListener("click", ranColors);

// display and matches initial CSS linear gradient property on page load
window.onload = setGradient();