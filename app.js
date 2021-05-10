function colorChange() {
  background = Math.floor(Math.random() * 16777215).toString(16);
  console.log(background);
  document.getElementById("background").style.background = "#" + background;
  document.getElementById("hex").innerHTML = "#" + background;
}
