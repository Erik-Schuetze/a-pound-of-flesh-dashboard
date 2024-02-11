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
    
    // Fade out the current content
    contentContainer.style.opacity = 0;

    setTimeout(function () {
        // Update the content
        contentContainer.innerHTML = currentFact;
        
        // Fade in the new content
        contentContainer.style.opacity = 1;
    }, 1000); // Adjust the delay according to your preference

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
        }, 10000);
    }

    loop();
}

startUpdatingFacts();