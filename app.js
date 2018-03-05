//alert("Please open this app using one of the iPhone devices in the toolbar of Chrome's developer tools, that is what we have been using for development.");


//log workout functions

function setText(){

  if (localStorage.getItem("exercise") !== null)
    {
      var currentTime = new Date().toString().slice(0,15);
        var text = localStorage.getItem("exercise");

        document.getElementById('timeline-day').insertAdjacentHTML('beforeend', "<ul> <li>" + currentTime + " - " + text + "</li></ul>");

    }


}

function openPainPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-pain').style.display = "block";
}

function openWorkoutPage() {
  document.getElementById('log-selection').style.display = "none";
  document.getElementById('log-workout').style.display = "block";
}


function logWorkout(){
  localStorage.setItem('exercise','30 minute run');
}

//login functions

function changeForm(){
  document.getElementById('login-form').style.display = "none";
  document.getElementById('create-form').style.display = "block";
}

function checkInputCreate(){
  var createUser = document.getElementById('create-user');
  var createPass = document.getElementById('create-pass');

  if (createUser.value.length == 0 || createPass.value.length == 0){
    alert("Please enter a username or password.");
    document.getElementById('create-next').href = "login.html";
  }
}

function checkInputLogin(){

  var loginUser = document.getElementById('login-user');
  var loginPass = document.getElementById('login-pass');

  if (loginUser.value.length == 0 || loginPass.value.length == 0){
    alert("Please enter a username or password");
    document.getElementById('login-next').href = "login.html";

  }
}


//log pain functions

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
//strech functions

function narrowSelection(selection) {
  document.getElementById('muscle-groups-selection').style.display = 'none';
  document.getElementById('back-stretch-selection').style.display = 'initial';

}

function openVideo(name) {
  var stretches = ['https://www.youtube.com/embed/Ms4e1F17eDo', 'https://www.youtube.com/embed/DWmGArQBtFI', 'https://www.youtube.com/embed/V22xxybieHk', 'https://www.youtube.com/embed/ZiNXOE5EsZw', 'https://www.youtube.com/embed/kd8nxvs2R0g', 'https://www.youtube.com/embed/9hVZ4rc2_3Y', 'https://www.youtube.com/embed/_LfxpD4GuEI']
  document.getElementById('open-video').src= stretches[name];
  document.getElementById('video-modal').style.display = 'block';

}

function closeModal() {
  document.getElementById('video-modal').style.display = 'none';
}

//comment

function addComment() {
  if (document.getElementById("add-comment").value == '' | document.getElementById("add-comment").value == 'Add a comment') {
    alert("Please submit a real comment.");
  }
  if (document.getElementById("add-comment").value != '' & document.getElementById("add-comment").value != 'Add a comment') {
    var comment = document.createElement("DIV");
    comment.setAttribute("class", "comment");
    var name = document.createElement("P");
    name.setAttribute("class", "comment-name");
    name.innerHTML = "John";
    var commentWord = document.createElement("h2");
    commentWord.innerHTML = document.getElementById("add-comment").value;
    commentWord.setAttribute("class", "comment-comment")
    comment.appendChild(name);
    comment.appendChild(commentWord);
    document.getElementById("comment-container").appendChild(comment);

  }
}
