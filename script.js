const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalBox = document.getElementById("modalBox");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
});

closeBtn.addEventListener("click", () => {
  modalBox.classList.add("scale-95", "opacity-0");
  setTimeout(() => modal.classList.add("hidden"), 200);
});
