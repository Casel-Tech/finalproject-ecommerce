function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

window.onload = function() {
    const footer = document.getElementById('footer');
    setTimeout(() => {
        footer.classList.add('visible'); // Add the class to trigger the animation
    }, 100); // Delay for 100 milliseconds
}