var squares = document.querySelectorAll(".square");
var resetButton = document.querySelector("#reset");
var currentPlayer = "X";
var gameOver = false;
var player;

function checkForWin() {
    // Check rows
    for (var i = 0; i < 9; i += 3) {
        if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i+1].innerHTML && squares[i+1].innerHTML === squares[i+2].innerHTML) {
            return true;
        }
    }
    // Check columns
    for (var i = 0; i < 3; i++) {
        if (squares[i].innerHTML !== "" && squares[i].innerHTML === squares[i+3].innerHTML && squares[i+3].innerHTML === squares[i+6].innerHTML) {
            return true;
        }
    }
    // Check diagonals
    if (squares[0].innerHTML !== "" && squares[0].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[8].innerHTML) {
        return true;
    }
    if (squares[2].innerHTML !== "" && squares[2].innerHTML === squares[4].innerHTML && squares[4].innerHTML === squares[6].innerHTML) {
        return true;
    }
    return false;
}

function checkForTie() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].innerHTML === "") {
            return false;
        }
    }
    return true;
}

function endGame(winner) {
    gameOver = true;
    for (var i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", handleClick);
    }
    // Play the victory music from YouTube
    
    
    //player.loadVideoById("W9Fq1HC_5hg");
    alert(winner + " wins!");
}

function onPlayerReady(event){
    if(gameOver)
        player.playVideo();
}

function handleClick() {
    if (gameOver || this.innerHTML !== "") {
        return;
    }
    this.innerHTML = currentPlayer;
    if (checkForWin()) {
        endGame(currentPlayer);
        player = new YT.Player('player', {
            height: '0',
            width: '0',
            videoId: 'W9Fq1HC_5hg',
            playerVars:{
                autoplay:1,
                controls:0,
                start:100,
                end:110,
                iv_load_policy:3
            },
            /**/
            events:{
                onReady:onPlayerReady,
                //onStateChange:onPlayerStateChange
            }
        });
    } else if (checkForTie()) {
        gameOver = true;
        alert("Tie game!");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function resetGame() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
        squares[i].addEventListener("click", handleClick);
    }
    currentPlayer = "X";
    gameOver = false;
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", handleClick);
}

resetButton.addEventListener("click", resetGame);

