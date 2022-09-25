let select = document.querySelector(".size");
let black = document.querySelector(".black");
let random = document.querySelector(".random");
let erase = document.querySelector(".erase");


let click = false;
let color = 'black';

// Get the size board
select.addEventListener("click", () => {
    let size = getSize();
    createBoard(size);
});

function getSize() {
    let input = prompt('Enter size grid');
    let message = document.querySelector(".message");

    if (input === "") {
        message.innerHTML = "Enter a number";
    } else if(input < 0 || input > 100 ) {
        message.innerHTML = "Enter number between 0 and 100";
    } else {
        message.innerHTML = "Now you play";
        return input;
    }
}

// Create board 
function createBoard(size) {
    let board = document.querySelector(".board");
    
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.className = 'divs';
        div.style.backgroundColor = 'white';
        board.insertAdjacentElement("beforeend", div);
        div.addEventListener("mouseover", colorDiv);
    }
}

// Select colors
function colorDiv() {
    if(click) {
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (color === 'white') {
            this.style.backgroundColor = 'white';
        } else {
            this.style.backgroundColor = 'black';
        }
    }
}


function setColor(colorChoice) {
    color = colorChoice;
}

// create 'click on click off' function 
document.querySelector("body").addEventListener("click", function(e){
    if(e.target.tagName != "BUTTON") {
        click = !click;
    }
})

// reset function
function resetBoard() {
    let reset = document.querySelectorAll(".divs");
    reset.forEach((div) => {
        div.style.backgroundColor = 'white';
    });
}



