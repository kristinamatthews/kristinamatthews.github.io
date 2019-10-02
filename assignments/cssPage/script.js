"using strict"

function toggleNav() {
    const navItems = document.getElementById("top-nav-items");
    navItems.classList.toggle("hidden");
}

window.onload = function() {
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = this.toggleNav;
}