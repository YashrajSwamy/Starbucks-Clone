const mobMenu = document.querySelector('.mob-menu');
const navBar = document.querySelector(".navbar");
const footerHead = document.querySelectorAll(".footer-head");
mobMenu.addEventListener("click", () => {
    navBar.classList.toggle("active");
    mobMenu.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
    mobMenu.textContent = navBar.classList.contains("active") ? "✕" : "☰";
});

footerHead.forEach((e)=>{
    e.addEventListener('click',()=>{
        e.parentElement.classList.toggle("active");
    });
})