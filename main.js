console.log('main.js runt')

let elementH1=document.querySelector('h1');

elementH1.textContent = '';

let changebutton = document.querySelector('.knop');

changebutton.addEventListener('click',function(){
   let result= document.querySelector('.result');
    result.textContent='it works!';
})