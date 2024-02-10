let player_count = 0;

document.getElementById('button-add-player').addEventListener('click', function() {
  if (player_count < 8) {
    player_count++;
    var playerBox = `
    <div class="player-box">
    <div class="player-avatar">
      <img src="./amalthea.png" style="height: 100%; width: 100%;">
    </div>
    <div class="player-info">
      <p class="dash-line">//////////////////////////</p>
      <p class="player-name" contenteditable>Player ${player_count}</p>
      <p class="player-role" contenteditable>Class / Description</p>
    </div>
          `;

    var contentContainer = document.getElementById('player-list');
    contentContainer.innerHTML += playerBox;
  };
});

document.getElementById('button-remove-player').addEventListener('click', function() {
  if (player_count > 0) {
    player_count--;

    var contentContainer = document.getElementById('player-list');
    var children = contentContainer.children;

    if (children.length > 0) {
        contentContainer.removeChild(children[children.length - 1]);
        clickCount--; // Decrement the click count when removing an item
    }
  };
});