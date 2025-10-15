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

// Create new items on list
const addBtn = document.getElementById("addItem");
const list = document.getElementById("list");
const input = document.getElementById("taskInput");

age = 45;

if (age >= 23) {
  alert("You're no longer young");
} else {
  alert("You're still young");
}

addBtn.addEventListener("click", () => {
  const task = input.value.trim();
  if (task === "") return alert("please enter a task!");

  // Create list here
  const li = document.createElement("li");
  li.className =
    "flex justify-between items-center bg-gray-50 p-2 rounded-lg shadow-sm";

  const span = document.createElement("span");
  span.textContent = task;
  span.className = "flex-grow cursor-pointer";
  span.addEventListener("click", () => {
    span.classList.toggle("line-through");
    span.classList.toggle("text-gray-400");
  });

  // Create Element
  // const li = document.createElement("li");
  // li.textContent = "New item added!";
  // document.getElementById("list").appendChild(li);

  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.className = "ml-2 text-red-500 hover:text-red-700 font-bold text-lg";
  // delBtn.src = "https://.0.0.1:500/9000/"
  // delBtn.id = "delBtn"
  delBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = ""; // clear input
});
