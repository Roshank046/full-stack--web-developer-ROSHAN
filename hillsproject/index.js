burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
   rightNav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   navbar.classList.toggle('h-nav-resp');
})


let n=document.querySelector('#name') callback
let button=document.querySelector('#btt')
let details=document.querySelector('#details')
button.addEventListener('click',function(){
   n=n.value;
   let h=document.createElement('h1')
   h.append(n)
   details.append(h);
})