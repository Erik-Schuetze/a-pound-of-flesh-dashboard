let currentFactIndex = 0;
const facts = [
    "Population (City Level): 5.6m", 
    "Population (Choke): 3.1m", 
    "Diameter: 12.98km",
    "Circumference: 40.77km",
    "Decks (Outer Ring): 23",
    "Decks (Ring Structures Avg.): 78",
    "Decks (Center Spire): 430"
];

function updateFact() {
    const currentFact = facts[currentFactIndex];
    
    var contentContainer = document.getElementById('header-facts');
    contentContainer.innerHTML = ""; // Clear the container before updating
    
    contentContainer.innerHTML = currentFact;
    console.log("Updating facts:", currentFact);

    // Increment the fact index and loop back to the beginning if needed
    currentFactIndex = (currentFactIndex + 1) % facts.length;
}

function startUpdatingFacts() {
    // Call updateFact immediately
    updateFact();

    // Set up the non-blocking loop
    function loop() {
        // Call updateFact after 5 seconds
        setTimeout(function () {
        updateFact();
        loop(); // Call loop again for the next iteration
        }, 5000);
    }

    loop();
}

startUpdatingFacts();