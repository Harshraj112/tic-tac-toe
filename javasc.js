let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("RESET");
let newGamneBtn = document.getElementById("new_game");
let msgcontainer = document.querySelector("#msg_container");
let msgcontainer2 = document.getElementById("msg-container");
let message = document.querySelector("#msg1");
let message2 = document.getElementById("message1");

let turnO = true;

const WinPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    turnO = true;
    enableBtn();
    msgcontainer2.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        console.log("box was clicked");
        if(turnO === true) {
            box.innerHTML = "O";
            turnO = false;
        }else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});


const disableBtn = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBtn = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    message2.innerText = `Congratulation, Winner is '${winner}'`
    msgcontainer2.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let patterns of WinPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val) {
                console.log("winner" , pos1val);

                showWinner(pos2val);
            }else {
                // message2.innerText = `Sorry No one wins! Try it next time `
            }
    }
}
};

newGamneBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);