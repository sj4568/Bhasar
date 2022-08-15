var nav = document.querySelector(".nav");
var btn=document.querySelector(".btn");
window.onscroll=function() {
    nav.classList.toggle("sticky",scrollY>0);
    
}
btn.onclick=function(){
    nav.classList.toggle("active");
}