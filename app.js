//alert("Please open this app using one of the iPhone devices in the toolbar of Chrome's developer tools, that is what we have been using for development.");

function openLogPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-pain').style.display = "block";
}


function toggleImage() {
  var currImage = document.getElementById('body-map').attributes.src;
  if (currImage.value == "assets/front.png") {
    currImage.value = "assets/back.png";
  }
  else {
    currImage.value = "assets/front.png";
  }

}

function markPain(e) {
  var xPos = e.clientX;
  var yPos = e.clientY;
  var painPoint = document.createElement("DIV");
  painPoint.setAttribute("class", "pain-points");
  painPoint.setAttribute("style", ("top: " + yPos.toString() + "px; left: " + xPos.toString() + 'px;'));
  document.getElementById("log-pain").appendChild(painPoint);

}
