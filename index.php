<!DOCTYPE html>
<html>
<head>
  <title>Website</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <header>
    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="#">About</a>
      <a href="trackprogress.php">Track Progress🔒</a>
      <a href="#">Listening</a>
      <a href="#">Writing</a>
    </div>

    <span onclick="openNav()"><img src="img/menu.png" height="40px" width="40px"></span>
    <div class="header-title">
      <h1 style="text-align:center">LITERALITY</h1>
    </div>  
  </header>
  
  <div class="button-container">
    <button id="previous-button" onclick="previousLevel()"><</button>
    <button id="next-button" onclick="nextLevel()">></button>
  </div>
  
  <br><br>
  <div id="myModal" class="modal" style="display: none;">
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Level Failed!</p>
    </div>
  </div>
  
  <div class="container">
    <div id="LEVEL1" class="level">
      <video class="video-background" autoplay loop muted controlsList="nodownload">
        <source src="video/bckimg.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>

      <div class="foreground-content">
        <!-- Add your other content here -->
        <div class="audio-icon">
          <img src="img/audio.png" height="60px" width="80px" onclick="playAudio()" class="ad">
          <audio id="audio-player">
            <source src="audio/audiol1.mp3" type="audio/mp3">
          </audio>
        </div>
        
        <div class="containerballs">
          <div class="balls-wrapper">
            <div class="blueball">
              <img id="blueball" src="img/blueball.png" height="150px" width="150px" onclick="draggable(event)" draggable="true">
            </div>
            <div class="redball">
              <img id="redball" src="img/redball.png" height="160px" width="150px" onclick="draggable(event)" draggable="true">
            </div>
          </div>
        </div>
        
        <div class="hand" style="margin-top:-300px">
          <div class="hand-image"></div>
          <img src="img/charac.png" height="400px" width="400px" onclick="draggable(event)">
        </div>
      </div>
    </div>
    
    <div id="level2" class="level" style="display: none;">
  <div class="audio-icon">
    <img src="img/audio.png" height="60px" width="80px" onclick="playAudio2()" class="ad">
    <audio id="audio-player2">
      <source src="audio/audiol2.mp3" type="audio/mp3">
    </audio>
  </div>

  <div class="room-container">
    <div class="top-rooms">
      <div class="room">
        <div class="circle">
          <img src="img/livingroom.png" height="200px" width="200px" class="room-image" id="livingroom" ondrop="drop2(event)" ondragover="allowDrop2(event)">
        </div>
      </div>
      <div class="room">
        <div class="circle">
          <img src="img/bedroom.png" height="200px" width="200px" class="room-image" id="bedroom" ondrop="drop2(event)" ondragover="allowDrop2(event)">
        </div>
      </div>
    </div>

    <div class="peter">
      <div class="circle">
        <img src="img/peter.png" height="200px" width="200px" class="room-image" id="character" draggable="true" ondragstart="dragStart2(event)">
      </div>
    </div>

    <div class="bottom-rooms">
      <div class="room">
        <div class="circle">
          <img src="img/washroom.png" height="200px" width="200px" class="room-image" id="washroom" ondrop="drop2(event)" ondragover="allowDrop2(event)">
        </div>
      </div>
      <div class="room">
        <div class="circle">
          <img src="img/kitchen.png" height="200px" width="200px" class="room-image" id="kitchen" ondrop="drop2(event)" ondragover="allowDrop2(event)">
        </div>
      </div>
    </div>
  </div>
</div>


<div id="level3" class="level"  style="display: none;">
     
    </div>
    










<div class="progress-bar">
      <div id="progress-bar-fill" class="progress-bar-fill"></div>
    </div>
  </div>

      
    </div>

  
  <br><br>

  <footer>
    <p>&copy; All rights reserved.</p>
  </footer>
  <script src="script.js"></script>

  
</body>
</html>
