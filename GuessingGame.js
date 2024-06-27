let maxNum = prompt("Enter the max number");

let random = Math.floor(Math.random() * maxNum) + 1;
let guess = prompt("Guess the number, and enter it");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if(guess == random){
        console.log("congrats, you guess right, your guess was", guess);
        break;
    } else if(guess < random){
        guess = prompt("hint : your guess was too small, please try again");
    } else {
        guess = prompt("hint : your guess was too large, please try again");
    }
}