// Create a custom cursor element
const customCursor = document.querySelector(".custom-cursor");

// Smoothing factor
const smoothingFactor = 0.15;

// Mouse position variables
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Update the custom cursor position
function updateCustomCursor() {
  const dx = mouseX - customCursor.offsetLeft;
  const dy = mouseY - customCursor.offsetTop;

  customCursor.style.left = `${
    customCursor.offsetLeft + dx * smoothingFactor
  }px`;
  customCursor.style.top = `${customCursor.offsetTop + dy * smoothingFactor}px`;

  requestAnimationFrame(updateCustomCursor);
}

// Update mouse coordinates on mousemove
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Start updating the custom cursor
updateCustomCursor();
