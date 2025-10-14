const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const modalBox = document.getElementById("modalBox");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modalBox.classList.remove("scale-95", "opacity-0");
  modalBox.classList.add("scale-100", "opacity-100");
  // setTimeout(() => {
  //   modalBox.classList.remove("scale-95", "opacity-0");
  //   modalBox.classList.add("scale-100", "opacity-100");
  // }, 50);
});

closeBtn.addEventListener("click", () => {
  modalBox.classList.add("scale-95", "opacity-0");
  modal.classList.add("hidden");
  // setTimeout(() => modal.classList.add("hidden"), 200);
});

const images = [
  "https://picsum.photos/id/1011/400/250",
  "https://picsum.photos/id/1015/400/250",
  "https://picsum.photos/id/1016/400/250",
  "https://picsum.photos/id/1020/400/250",
];

let index = 0;

const sliderImage = document.getElementById("sliderImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

nextBtn.addEventListener("click", () => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  sliderImage.src = images[index];
});

// Toggle
const toggle = document.body;
const toggleCircle = document.getElementById("toggleCircle");
const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
  const dark = toggle.classList.toggle("bg-gray-900");
  toggle.classList.toggle("text-white");
  toggleTheme.setAttribute("aria-checked", dark);
  toggleCircle.classList.toggle("translate-x-6");
});

// Font size slider
const fontSlider = document.getElementById("fontSlider");
const sliderText = document.getElementById("sliderText");

fontSlider.addEventListener("click", () => {
  sliderText.style.fontSize = fontSlider.value + "px";
});
