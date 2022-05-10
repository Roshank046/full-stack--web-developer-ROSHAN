const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetbutton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningscoreselect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningscore = 5;
let isgameover = false;

p1button.addEventListener('click',function(){
    if (!isgameover) {
p1score += 1;
   if (p1score === winningscore){
       isgameover = true;
       p1Display.classList.add('winner');
       p2Display.classList.add('loser')
   } 
p1Display.textContent = p1score;
    }
})
p2button.addEventListener('click',function(){
    if (!isgameover) {
p2score += 1;
   if (p2score === winningscore){
       isgameover = true;
       p2Display.classList.add('winner')
       p1Display.classList.add('loser')
   }      
p2Display.textContent = p2score;
    }
})
 resetbutton.addEventListener('click',function() {
isgameover = false;
p1score = 0;
p2score = 0;
p1Display.textContent = 0;
p2Display.textContent = 0;
 })
 winningscoreselect.addEventListener('change',function(){
     winningscore = parseInt(this.value);
     reset();
 })

 resetbutton.addEventListener('click',reset)
 function reset() {
     isgameover = false;
     p1score = 0;
     p2score = 0;
     p1Display.textContent = 0;
     p2Display .textContent =0;
     p1Display.classList.remove('winner' ,'loser');
     p2Display.classList.remove('winner' , 'loser');
 }