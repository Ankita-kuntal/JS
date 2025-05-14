var main=document.getElementById("main");
let s= " ";
let imageLinks = [
    "https://i.pinimg.com/474x/b3/bf/f7/b3bff72d93d22a4bfacc8d70a4d3c42b.jpg",
    "https://i.pinimg.com/474x/a0/a7/83/a0a78370db086e9292725aa8b87827d4.jpg",
    "https://i.pinimg.com/474x/99/6e/84/996e8413652481161921f3f1ff964a04.jpg",
    "https://i.pinimg.com/474x/a1/c9/82/a1c9827fac07c6907c36015fde0cf428.jpg",
    "https://i.pinimg.com/474x/fc/0e/5c/fc0e5cfdb3bc6e6faaf5dec530377b9a.jpg",
    "https://i.pinimg.com/474x/78/3a/81/783a813a8fec2740744fe63014bb1995.jpg"
];


for(let i=1;i<=70;i++){
    function getRandomNumber() {
        return Math.floor(Math.random() * 6); // 6 is exclusive, so it returns numbers from 0 to 5
    }
    
    s+=`<div class="card">
            <img src=${imageLinks[getRandomNumber()]} >
        </div>`
}
// main.innerHTML="Goodbye"; //pura element change ho gya...including <h1> tag!
main.innerHTML=s;

//<img src="https://i.pinimg.com/474x/b3/bf/f7/b3bff72d93d22a4bfacc8d70a4d3c42b.jpg" >

