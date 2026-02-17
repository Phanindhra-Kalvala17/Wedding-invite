function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.innerHTML = "🌸";

  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = Math.random() * 3 + 5 + "s";
  flower.style.opacity = Math.random();

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 8000);
}

setInterval(createFlower, 500);
