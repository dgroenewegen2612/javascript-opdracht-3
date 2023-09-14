console.log('main.js runt')

//opdracht 1
let elementH1=document.querySelector('h1');

elementH1.textContent = 'veranderd';



//opdracht 2
let changebutton = document.querySelector('.knop');
changebutton.addEventListener('click',function(){
   let result= document.querySelector('.result');
    result.textContent='it works!';
})

//opdracht 3

let userImput= prompt("type your name");
let div=document.querySelector('.own-text');
div.textContent=userImput;

