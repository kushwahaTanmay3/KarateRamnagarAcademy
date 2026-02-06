let list =document.getElementById("list");
let menuOpen =document.getElementById("menuOpen");
let menuClose=document.getElementById("menuClose");
menuOpen.addEventListener("click", ()=>{
    list.style.display="block";
    menuOpen.style.display="none";
    menuClose.style.display="block";
})
menuClose.addEventListener("click",()=>{
    list.style.display="none";
    menuOpen.style.display="block";
    menuClose.style.display="none";
})