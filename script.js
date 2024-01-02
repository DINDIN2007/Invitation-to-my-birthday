var savedTime = (new Date()).getTime(), delay = 5 * 1000;

function animate() {
  window.requestAnimationFrame(animate);

  if (savedTime + delay < (new Date()).getTime()) {
    changeColor();
    savedTime = (new Date()).getTime();
  }
}

function changeColor() {
  var x = Math. floor(Math. random() * 256);
  var y = Math. floor(Math. random() * 256);
  var z = Math. floor(Math. random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = bgColor;
}

animate();