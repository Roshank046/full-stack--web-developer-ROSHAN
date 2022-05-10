const button = document.querySelector('button');
button.addEventListener('click',function () {


    const r = Math.floor(Math.random() * 255);  
    const g = Math.floor(Math.random() * 255);  
    const b= Math.floor(Math.random() * 255);  
    const newcolor =(`rgb(${r},${g},${b})`);

    document.body.style.backgroundColor =newcolor;
    const h1 = document.querySelector('#abc');
    h1.innerHTML=newcolor;
    const button = document.querySelectorAll('button');


})

function red(){
    const r = Math.floor(Math.random() * 255);  
    const g = Math.floor(Math.random() * 255);  
    const b= Math.floor(Math.random() * 255);  
    return (`rgb(${r},${g},${b})`);

}

let d=document.querySelector('#kool')
d.addEventListener('click',function(){
d.style.backgroundColor=red();
})