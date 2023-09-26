// Create a custom cursor element
const customCursor = document.querySelector(".custom-cursor");

// Smoothing factor
const smoothingFactor = 0.15;

// Mouse position variables
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Initially hide the cursor
customCursor.style.display = 'none';

// Update the custom cursor position
function updateCustomCursor() {
  const dx = mouseX - customCursor.offsetLeft;
  const dy = mouseY - customCursor.offsetTop;

  customCursor.style.left = `${customCursor.offsetLeft + dx * smoothingFactor}px`;
  customCursor.style.top = `${customCursor.offsetTop + dy * smoothingFactor}px`;

  requestAnimationFrame(updateCustomCursor);
}

// Update mouse coordinates on mousemove
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // Show the cursor on mouse movement
  customCursor.style.display = 'block';
});

// Hide the cursor on touchstart (for mobile devices)
window.addEventListener("touchstart", () => {
  customCursor.style.display = 'none';
});

// Start updating the custom cursor
updateCustomCursor();