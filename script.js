//your JS code here. If required.
const line = document.querySelector("#line");
let angle = 0;
function rotate() {
  angle += 2;
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  line.style.transformOrigin = "center";
}
setInterval(rotate, 20);
