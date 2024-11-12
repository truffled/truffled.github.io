function filterGames() {
    const searchInput = document.getElementById("gameSearch").value.toLowerCase();
    const games = document.querySelectorAll(".game");

    games.forEach(game => {
        const gameName = game.getAttribute("data-name").toLowerCase();
        if (gameName.includes(searchInput)) {
            game.style.display = "block";
        } else {
            game.style.display = "none";
        }
    });
}

function playGame(gameName) {
    alert("Starting " + gameName + "...");
}

function details(gameName) {
    alert("Showing details for " + gameName + "...");
}
