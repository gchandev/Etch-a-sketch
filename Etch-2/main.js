let color = "black";


// Ensures DOM content loaded first. i.e. same as defer in script;
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    
    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
    console.log("hi");
})

// Create board function to create grid.
function createBoard(size){
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        // div.style.backgroundColor = "yellow";
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

// Prompt user to enter in board size.
function getSize() {
    let input = prompt("What will be the size of the board?");
    let message = document.querySelector("#message");
    if(input === "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = "Now you play!"
        return input;
    }
}

function colorDiv() {
    if(color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = 'black';
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white");
}

