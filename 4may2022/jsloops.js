const SECRET ="appiness";

let guess = prompt("enter your guess");
while (guess !== SECRET) {
    guess =prompt("enter your guess");   
}
console.log("congrats")