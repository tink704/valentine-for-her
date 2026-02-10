let noCount = 0;

// floating hearts
function createHearts() {
  const container = document.getElementById("hearts-bg");

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHearts, 500);

// NO button logic
document.getElementById("noBtn").addEventListener("mouseover", () => {
  noCount++;

  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  const yesBtn = document.getElementById("yesBtn");
  yesBtn.style.fontSize =
    parseFloat(getComputedStyle(yesBtn).fontSize) + 4 + "px";

  if (noCount >= 6) {
    showWarning();
  }
});

// WARNING SCREEN
function showWarning() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h1 class="warning-text">Stop messing with me! 😾</h1>
    <img
      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTdtNDZscThtdWV3dmE4eTIzcmZmM3QxZDNkcTh1bTR3OWo2M3k5YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/y93x7gLXTO5dnSWCEI/giphy.gif"
      class="warning-img"
      alt="Cute angry cat"
    />
  `;
}

// YES logic
document.getElementById("yesBtn").addEventListener("click", () => {
  document.getElementById("question").innerText = "Yay! ❤️ See you then!";
  document.getElementById("main-gif").src =
    "https://media.tenor.com/gU_ec9OOf6kAAAAi/bear-kiss-bear-kisses.gif";

  document.getElementById("noBtn").style.display = "none";
  document.getElementById("extra-img").classList.remove("hidden");

  confetti({
    particleCount: 160,
    spread: 80,
    origin: { y: 0.6 },
    colors: ["#ff4d6d", "#ffafbd", "#ffffff"]
  });
});
