//create a game

let gameNum=25;


let userNum=prompt("Guess the game number: ");

while(userNum !=gameNum){
userNum=prompt("You entered  wrong ,guess number: ");
}
console.log("congratulations you entered a right a number");