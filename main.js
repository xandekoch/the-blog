window.addEventListener("scroll", onScroll);

function openMenu() {
    document.body.classList.add("menu-expanded");
}

function closeMenu() {
    document.body.classList.remove("menu-expanded");
}

onScroll()

function onScroll() {
    showBackToTopButtonOnScroll()
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
}