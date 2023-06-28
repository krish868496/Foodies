// ACTIVE NAVBAR 
let navbar = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        navbar.classList.add("scroll-on");
    }
    else{
        navbar.classList.remove("scroll-on")
    }
}








// hide navbar 

let nav = document.querySelectorAll(".nav-link");
let collapse = document.querySelector(".navbar-collapse.collapse");

nav.forEach(function(a){
    a.addEventListener("click", ()=>{
        collapse.classList.remove("show");
    })
})

// counter design 
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1287, 3000);
    counter("count2", 100, 5785, 2500);
    counter("count3", 0, 1440, 3000);
    counter("count4", 0, 7100, 3000);
})



