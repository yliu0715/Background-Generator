var h3 = document.querySelector('h3');
var color1 = document.querySelector('.color-1');
var color2 = document.querySelector('.color-2');
var body = document.getElementById('gradient');

function setGradient() {
  body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
  h3.innerHTML = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
