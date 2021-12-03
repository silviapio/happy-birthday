const greeting = document.getElementById("greeting");
const balloon = document.getElementById("balloon");
const balloonContainer = document.getElementById("balloon-container");
const credits = document.getElementById("credits");
const reload = document.getElementById("reload");
const nameInput = document.getElementById("input-name");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  showLove();
});

function showLove() {
  let name = nameInput.value;
  form.classList.add("hidden");
  reload.classList.remove("hidden");
  credits.classList.remove("hidden");
  balloonContainer.style.opacity = 1;
  greeting.textContent = `A lot of love to you, ${name || "stranger"}!`;
}

function createBalloon() {
  const clone = balloon.cloneNode(true);
  clone.style.paddingLeft = Math.random() * 10 + "px";
  clone.style.animationDuration = Math.random() * 5 + 3 + "s";
  clone.style.opacity = Math.random() * 1;
  const randomInvert = Math.random() * 100;
  const randomHue = Math.random() * 360;
  clone.style.filter = `invert(${randomInvert}%) hue-rotate(${randomHue}deg)`;
  balloonContainer.append(clone);
}

// to create more balloons decrease 100
const s = setInterval(createBalloon, 100);

setTimeout(() => {
  clearInterval(s);
}, 3000); // balloons creation stops after 3000 milliseconds
