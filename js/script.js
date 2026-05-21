console.log(document.querySelectorAll(".animal"));

document.querySelector("p").addEventListener('clck',function(){
    
});
let animals = document.querySelectorAll("animal");
for(i = 0; i < animals.length; i++ ){
    animals.addEventListener('click',function(){
        alert("damakliket");
    })
}