let fontSize = 20;

function changeHeading() {
  let text = document.getElementById("textInput").value;
  document.getElementById("heading").innerText = text;
}

function changeBackground() {
  document.body.style.backgroundColor = "lightblue";
}

function increaseFont() {
  fontSize += 2;
  document.getElementById("para").style.fontSize = fontSize + "px";
}

function togglePara() {
  let para = document.getElementById("para");

  if (para.style.display === "none") {
    para.style.display = "block";
  } else {
    para.style.display = "none";
  }
}

function resetPage() {
  location.reload();
}