// script.js
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  let currentLevel = 0;
  const levels = document.getElementsByClassName("level");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const totalLevels = levels.length;
  const progressPercentage = 100 / totalLevels;
  
  function showLevel(levelIndex) {
    for (let i = 0; i < levels.length; i++) {
      levels[i].style.display = "none";
    }
  
    levels[levelIndex].style.display = "block";
    progressBarFill.style.width = (levelIndex + 1) * progressPercentage + "%";
  }
  
  function nextLevel() {
    if (currentLevel < totalLevels - 1) {
      currentLevel++;
      showLevel(currentLevel);
    }
  }
  
  function previousLevel() {
    if (currentLevel > 0) {
      currentLevel--;
      showLevel(currentLevel);
    }
  }
  
  showLevel(currentLevel);
  
  function playAudio() {
    var audio = document.getElementById("audio-player");
    audio.play();
  }


  
  const blueBall = document.getElementById("blueball");
  const redBall = document.getElementById("redball");
 
  
  blueBall.addEventListener("dragstart", dragStart);
  redBall.addEventListener("dragstart", dragStart);

  
  blueBall.addEventListener("dragend", dragEnd);
  redBall.addEventListener("dragend", dragEnd);


  
  function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.style.opacity = "0.0";
    const emptyImage = new Image();
    event.dataTransfer.setDragImage(emptyImage, 0, 0);
  }
  
  function dragEnd(event) {
    event.target.style.opacity = "1";
  }
  
  const hand = document.querySelector(".hand-image");
  
  
  hand.addEventListener("dragover", dragOver);
  hand.addEventListener("drop", drop);
  hand.addEventListener("dragleave", dragLeave);

  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const draggableElementId = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(draggableElementId);
  
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
  
    if (draggableElementId === "redball") {
      // Level failed, show the modal
      modal.style.display = "block";
    } else {
      alert("Level completed");
    }


  }

  // Add touch event listeners for mobile and tablet devices
blueBall.addEventListener("touchstart", touchStart);
redBall.addEventListener("touchstart", touchStart);

hand.addEventListener("touchmove", touchMove);
hand.addEventListener("touchend", touchEnd);

// Touch event handlers
function touchStart(event) {
  event.preventDefault();
  event.target.style.opacity = "0.0";
}

function touchMove(event) {
  event.preventDefault();
  const touch = event.touches[0];
  const draggableElementId = touch.target.id;

  if (draggableElementId === "blueball" || draggableElementId === "redball") {
    // Move the element with touch position
    const handRect = hand.getBoundingClientRect();
    const offsetX = touch.clientX - handRect.width / 2;
    const offsetY = touch.clientY - handRect.height / 2;
    hand.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
}

function touchEnd(event) {
  event.preventDefault();
  const draggableElementId = event.target.id;

  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  if (draggableElementId === "redball") {
    // Level failed, show the modal
    modal.style.display = "block";
  } else {
    alert("Level completed");
  }

  // Reset the hand position
  hand.style.transform = "";
}

// Disable default touch behavior to prevent scrolling or zooming
document.addEventListener("touchmove", function (event) {
  event.preventDefault();
}, { passive: false });

  
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function () {
    modal.style.display = "none";
  };
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  
  function dragLeave(event) {
    //event.target.style.backgroundColor = "#ccc";
  }



  //level 2
  function playAudio2() {
    var audio = document.getElementById("audio-player2");
    audio.play();
  }

  function dragStart2(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.style.opacity = "0.0";
  }

  function allowDrop2(event) {
    event.preventDefault();
  }

  function drop2(event) {
    event.preventDefault();
    var characterId = event.dataTransfer.getData("text");
    var room = event.target.closest(".room");

    if (room && room.querySelector(".room-image").id === "bedroom") {
      alert("Mission Passed!");
    } else {
      alert("Mission Failed!");
    }
  }