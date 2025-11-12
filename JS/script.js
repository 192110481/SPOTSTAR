// ==========================
// SPOTSTAR GLOBAL SCRIPT
// ==========================

// 1️⃣ Fade-in Page Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  console.log("✅ SPOTSTAR script loaded successfully!");
});

// 2️⃣ Back Button Handling
document.addEventListener("DOMContentLoaded", () => {
  const backButtons = document.querySelectorAll(".back-btn");
  backButtons.forEach(btn => {
    btn.addEventListener("click", () => history.back());
  });
});

// 3️⃣ Allow only one audio to play at a time
document.addEventListener("play", (event) => {
  const allAudios = document.getElementsByTagName("audio");
  for (let i = 0; i < allAudios.length; i++) {
    if (allAudios[i] !== event.target) {
      allAudios[i].pause();
    }
  }
}, true);

// 4️⃣ Optional: Page Load Greeting (visible in console)
document.addEventListener("DOMContentLoaded", () => {
  console.log("🎬 Welcome to SPOTSTAR — Enjoy your movies & music!");
});
