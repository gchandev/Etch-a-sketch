let color = "black";
let click = false;

// Ensures DOM content loaded first. i.e. same as defer in script;
document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    
    document.querySelector("body").addEventListener("click", function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now You Can Draw";
            } else {
                draw.innerHTML = "You're Not Allowed To Draw";
            }
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })

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
    if(click) {
        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = 'black';
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll('div');
    divs.forEach((div) => div.style.backgroundColor = "white");
}

