
const modalOpen = document.getElementsByClassName("modal-open")[0];
modalOpen.addEventListener('click', openModal, false);
function openModal() {
    document.getElementById("mobile-menu").className = "mobile-menu-container is-open";
}

const modalClose = document.getElementsByClassName("modal-close");
for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', closeModal, false);
}
function closeModal() {
    document.getElementById("mobile-menu").className = "mobile-menu-container";
}

