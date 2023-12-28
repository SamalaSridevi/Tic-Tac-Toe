let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let btn = document.querySelector("#btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerx Player Os
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
} 
let count = 0;
let val = boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        count++;
        if(turnO){ //player O
            box.style.color = "purple";
            box.innerText= "O";
            turnO = false;
        }
        else{ //Player X
            box.style.color = "green";
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const showDraw = () => {
    msg.innerText = "It's a Draw..";
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () =>{
    for(let pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText; 
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            else{
                if(count == 9){
                    showDraw();
                }
            }
        }
    }
};

btn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
