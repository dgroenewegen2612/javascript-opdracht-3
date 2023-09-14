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
let knop = document.querySelector(".knop")
knop.addEventListener("click", function () {
    let userInput= prompt("type your name");
    let text=document.querySelector('.own-text');
    text.innerHTML= "<p>" + userInput + "</p>"
})


//opdracht 4


let ButtonForNumber=document.querySelector('.generate-random-number');
ButtonForNumber.addEventListener('click',function(){
let randomNumber=document.querySelector('.random-number')
number=Math.floor(Math.random()*11)+0;
randomNumber.innerHTML= "<p>"+ number +"</p>"
})

