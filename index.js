const links=document.querySelector(".sidebar");

const toggleButton =document.getElementById("toggle-btn");
//console.log(links);
//console.log(links.classList.contains("show-sidebar"));
//console.log(links.classList.contains("sidebar"));
toggleButton.addEventListener("click",()=>{
        links.classList.toggle("show-sidebar");
});