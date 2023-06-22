window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('circleCanvas');
  const ctx = canvas.getContext('2d');
  const sizes = ['small', 'medium', 'large'];
  const circleRadiusRange = { min: 10, max: 40 };
  const spacing = 60;

  const numCircles = 20;
  let circles = [];

  function initializeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }

  function initializeCircles() {
    for (let i = 0; i < numCircles; i++) {
      const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
      const randomRadius = getRandomNumber(circleRadiusRange.min, circleRadiusRange.max);
      let randomX, randomY;
      let isOverlapping = true;

      while (isOverlapping) {
        randomX = Math.floor(Math.random() * (canvas.width - 2 * (randomRadius + spacing))) + (randomRadius + spacing);
        randomY = Math.floor(Math.random() * (canvas.height - 2 * (randomRadius + spacing))) + (randomRadius + spacing);

        if (!isCircleOverlapping(randomX, randomY, randomRadius)) {
          isOverlapping = false;
        }
      }

      const adjustedX = randomX;
      const adjustedY = randomY;

      circles.push({ x: adjustedX, y: adjustedY, radius: randomRadius });

      drawCircle(adjustedX, adjustedY, randomRadius, randomSize);
    }
  }

  function drawCircle(x, y, radius, size) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
  }

  function isCircleOverlapping(x, y, radius) {
    for (let i = 0; i < circles.length; i++) {
      const circle = circles[i];
      const dx = circle.x - x;
      const dy = circle.y - y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < circle.radius + radius + spacing) {
        return true;
      }
    }

    return false;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  initializeCanvas();
  initializeCircles();

  window.addEventListener('resize', () => {
    circles = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    initializeCanvas();
    initializeCircles();
  });
});
