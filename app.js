//alert("Please open this app using one of the iPhone devices in the toolbar of Chrome's developer tools, that is what we have been using for development.");


//log workout functions
  
function setText(){

  if (localStorage.getItem("exercise") !== null)
    {
      var currentTime = new Date().toString().slice(0,15);
        var text = localStorage.getItem("exercise");

        document.getElementById('workout-logs').innerHTML = text;

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

function displayDropdown() {

  var dropdown = document.getElementById('cardio-select');
  var cardio = document.getElementById('choice1');
  var strength = document.getElementById('choice2');

  if (cardio.checked) {
      dropdown.style.display = "flex";
  } else if (strength.checked) {
    dropdown.style.display = "none";
  }
}


function logWorkout(){
  localStorage.setItem('exercise','30 minute run');
}

function popupButton() {
  var popup = document.getElementById('myPopup');
  popup.classList.toggle("show");
}

function popupButton1() {
    var popup = document.getElementById('myPopup1');
    popup.classList.toggle("show");
}

function disable() {
  document.getElementById("myPopup").addEventListener("click", function() {
    document.getElementById("myPopup").disabled=true;
  });
}

function disable1() {
  document.getElementById("myPopup1").addEventListener("click", function() {
    document.getElementById("myPopup1").disabled=true;
  });
}
//login functions

function changeForm(){
  document.getElementById('login-form').style.display = "none";
  document.getElementById('create-form').style.display = "block";
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

//timeline functions
var timelineCount = 0;
var timelineContent = [{workout: localStorage.getItem("exercise"), pain: "Lower Back Pain"}, {workout: "Bench Press", pain: "No pain logged"}, {workout: "Rock Climb", pain: "Finger pain"}, {workout: "Abs", pain: "No pain logged"}]
var date = new Date();

function leftClick() {
  if (timelineCount < timelineContent.length - 1) {
    timelineCount++;
    var activity = timelineContent[timelineCount]
    document.getElementById("pain-logs").innerHTML = activity.pain;
    document.getElementById("workout-logs").innerHTML = activity.workout;
    document.getElementById("timeline-days").innerHTML = ("March " + (date.getDate()-timelineCount));
  }
}

function rightClick() {
  if (timelineCount > 0) {
    timelineCount--;
    var activity = timelineContent[timelineCount]
    document.getElementById("pain-logs").innerHTML = activity.pain;
    document.getElementById("workout-logs").innerHTML = activity.workout;
    if (timelineCount == 0) {
      document.getElementById("timeline-days").innerHTML = "Today"
    }
    else {
      document.getElementById("timeline-days").innerHTML = ("March " + (date.getDate()-timelineCount));
    }
  }
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
