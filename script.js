let pro=document.querySelectorAll(".post");
pro.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        e.childNodes[1].style.opacity="0.4"
        e.childNodes[3].classList.add("btn1")
    })
    e.addEventListener("mouseleave",function(){
        e.childNodes[1].style.opacity="1"
        e.childNodes[3].classList.remove("btn1")
    })
})
let toggle=document.querySelector(".toggle");
toggle.addEventListener("click",function(){
    document.querySelector(".ball").classList.toggle("move1 move0");
    
})