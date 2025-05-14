// function hello(){
//     console.log("hello");
    
// }

// function mello(){
//     console.log("mello");
    
// }

// setTimeout(hello,2*1000)
// setTimeout(mello,6*1000)

// //3:10

// setTimeout(function () {
//     console.log("Aur bhai");
    
// },5*1000)


//timer function--->
// for(let i=1;i<=10;i++){
//     setTimeout(function(){
//         console.log(i);
        
//     },i*1000);
// }

for(let i=1;i<=10;i++){
    setTimeout(function(){
        // console.log(11-i);
        console.log(Math.random());
        
        
    },i*500);
}