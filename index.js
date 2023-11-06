// Iteration 1: Declare all the variables
const boxElements = document.querySelectorAll(".box");
const winningCombinations = [
  [0, 1, 2],
  [0, 4, 8],
  [2, 5, 8],
  [3, 4, 5],
  [0, 3, 6],
  [2, 4, 6],
  [6, 7, 8],
  [1, 4, 7]
];
const message = document.getElementById("message");
const button = document.getElementById("button");
const result = document.getElementById("result");

var click = 0;
let xAttempts = [];
let oAttempts = [];
let wonGame = 0;

boxElements.forEach((el, i) => {
  el.addEventListener("click", (event) => {
    handleClick(event);
  });
});

function handleClick(event) {
  let id = event.target.id;
  let p = document.createElement("p");
  p.setAttribute("class", "text"); // Change 'id' to 'class' for the text elements
  boxElements[id - 1].append(p);

  if (click % 2 === 0) {
    p.innerHTML = "X";
    p.style.color = "yellow";
    xAttempts.push(parseInt(id - 1));
    finalResult(winningCombinations, xAttempts, "X");
  } else {
    p.innerHTML = "O";
    p.style.color = "green";
    oAttempts.push(parseInt(id - 1));
    finalResult(winningCombinations, oAttempts, "O");
  }

  click++;

  if (click === 9 && wonGame === 0) {
    result.style.visibility = "visible";
    message.innerHTML = "It's a Tie";
  }
}

function finalResult(winningCombination,attempts,player){
  let count =0
  let checker = []
  for(let i=0;i<winningCombination.length;i++){
      if(Array.isArray(winningCombination[i])){
          finalResult(winningCombination[i],attempts,player);

      }else{
          if(attempts.includes(winningCombination[i])){
              checker.push(true)
              count++
          }
          else{
              checker.push(false)
          }
      }
  }
  if(checker.every(check=> check===true)&& count>2){
      result.style.visibility = 'visible'
      message.innerHTML = "The winner is "+ player +"!"
      wonGame =1


  }
}

button.onclick = () => {
  window.location.href = "./index.html";
};
