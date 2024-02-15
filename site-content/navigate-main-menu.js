let currentView = 0;

var menuViewCode = [
    '<img src="images/map.png" class="map">',
    '<img src="images/map2.png" class="map">',
    `
    <div class="rules">
        <h style="font-size: 4.5vh;">Rules</h>
        <div>Have your O2-Credstick on you at all times.<br>Your movements are tracked.</div>
        <div>One day of Oxygen onboard this station costs 10cr/day.</div>
        <div>Do not enter unauthorized areas. particularly The Choke!</div>
        <div>Contraband List: laser cutters, explosives, signal jammers, contagious bioweapons, EMP tech. <br>(This list is subject to change.)</div>
        <div>You can keep non-hull piercing weapons, but other weapons must be stowed in a rented locker (1cr/day/weapon). The key is tagged to the renter’s fingerprint, so don’t lose it.</div>
    </div>
    `,
    '<img src="images/the-court.png" class="map">',
    '<img src="images/the-farm.png" class="map">',
    '<img src="images/the-stellar-burn.png" class="map">',
]   

function updateMainView(){
    var contentContainer = document.getElementById('main-display');
    contentContainer.innerHTML = ""; // Clear the container before updating
    contentContainer.innerHTML = menuViewCode[currentView];
}

function updateNavBar(){
    var contentContainer = document.getElementById('nav-bar');
    contentContainer.innerHTML = ""; // Clear the container before updating

    var navBarContent = "<div>";

    for (let i = 0; i < menuViewCode.length; i++) {
        if (i == currentView) {
            navBarContent += '<span id="highlighted">\\</span>';
        } else {
            navBarContent += "\\";
        }
    }
    navBarContent += "</div>";

    contentContainer.innerHTML = navBarContent;
}

document.getElementById('nav-up').addEventListener('click', function() {
    if (currentView > 0) {
        currentView--;
        updateMainView();
        updateNavBar()
    }
});

document.getElementById('nav-down').addEventListener('click', function() {
    if (currentView < menuViewCode.length-1) {
        currentView++;
        updateMainView();
        updateNavBar()
    }
});

updateMainView();
updateNavBar()

//writing-mode: vertical-rl
//<span style="color: red">A</span>