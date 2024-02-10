let player_count = 0;
let players = [];


// Function to load players from localStorage on page load
function loadPlayersFromLocalStorage() {
  var storedPlayers = localStorage.getItem('players');
  if (storedPlayers) {
    players = JSON.parse(storedPlayers);
    player_count = players.length; // Update player_count based on the loaded players
    updatePlayerList();
  }
}

function savePlayersToLocalStorage() {
  localStorage.setItem('players', JSON.stringify(players));
}

// Function to update the player list in the HTML
function updatePlayerList() {
  var contentContainer = document.getElementById('player-list');
  contentContainer.innerHTML = ""; // Clear the container before updating

  players.forEach(function(player) {
    var playerBox = `
    <div class="player-box">
      <div class="player-avatar">
        <img src="./amalthea.png" style="height: 100%; width: 100%;">
      </div>
      <div class="player-info">
        <p class="dash-line">//////////////////////////</p>
        <p class="player-name" contenteditable>${player.name}</p>
        <p class="player-role" contenteditable>${player.role}</p>
      </div>
    </div>`;

    contentContainer.innerHTML += playerBox;
  });
}

document.getElementById('button-add-player').addEventListener('click', function() {
  if (player_count < 8) {
    player_count++;
    var newPlayer = { name: `Player ${player_count}`, role: 'Class / Description' };
    players.push(newPlayer);

    // Update the player list in the HTML
    updatePlayerList();

    // Save players to localStorage
    localStorage.setItem('players', JSON.stringify(players));
  }
});

document.getElementById('button-remove-player').addEventListener('click', function() {
  if (player_count > 0) {
    player_count--;

    // Remove the last player from the array
    players.pop();

    // Update the player list in the HTML
    updatePlayerList();

    // Save players to localStorage
    localStorage.setItem('players', JSON.stringify(players));
  }
});

document.getElementById('button-export-players').addEventListener('click', function() {
  var jsonString = JSON.stringify(players);
  var blob = new Blob([jsonString], { type: 'application/json' });
  var link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'players_export.json';
  link.click();
});

document.getElementById('button-import-players').addEventListener('click', function() {
  document.getElementById('input-import-players').click();
});

function importPlayers(event) {
  var input = event.target;
  var file = input.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function() {
      try {
        var importedPlayers = JSON.parse(reader.result);
        players = importedPlayers;
        player_count = players.length;
        updatePlayerList();
        savePlayersToLocalStorage();
        alert('Players imported successfully!');
      } catch (error) {
        console.error('Error importing players:', error); // Log the error to the console
        alert('Error importing players. Please check the file format.');
      }
    };

    reader.readAsText(file);
  }
}

// Example input element to trigger importing players from a JSON file
document.getElementById('input-import-players').addEventListener('change', function(event) {
  importPlayers(event);
});




// Load players from localStorage when the page loads
loadPlayersFromLocalStorage();
