const modal = document.getElementById("modal");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (e) {
  if (e.target === modal) {
    closeModal();
  }
};
