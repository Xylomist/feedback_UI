let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let btn=document.querySelector(".btn");
let mid=document.querySelector(".mid");
function clear(){
    box1.style.backgroundColor="";
    box2.style.backgroundColor="";
    box3.style.backgroundColor="";
}
box1.addEventListener("click",(e)=>{
    clear();
    box1.style.backgroundColor=" bisque";
    
})
box2.addEventListener("click",()=>{
    clear();
    box2.style.backgroundColor=" bisque";
    
})
box3.addEventListener("click",()=>{
    clear();
    box3.style.backgroundColor=" bisque";
    
})

btn.addEventListener("click",()=>{
mid.innerHTML="";
mid.innerHTML='<h1>Your Respone Has Been Recorded</h1>';
})