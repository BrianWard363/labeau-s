// Get the canvas element
var canvas = document.getElementById('circleCanvas');

// Get the canvas dimensions and 2D rendering context
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var ctx = canvas.getContext('2d');

// Array to store circle objects
var circles = [];

// Function to generate a random number within a range
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to generate a random color
function getRandomColor() {
  return 'red';
}

// Function to check if two circles overlap
function circlesOverlap(circle1, circle2) {
  var dx = circle1.x - circle2.x;
  var dy = circle1.y - circle2.y;
  var distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circle1.radius + circle2.radius;
}

// Function to generate a valid circle
function generateValidCircle() {
  var maxRadius;

  if (circles.length === 0) {
    // If it's the first circle, set a maximum radius
    maxRadius = Math.min(canvasWidth, canvasHeight) / 10;
  } else {
    // For subsequent circles, use a smaller maximum radius
    maxRadius = Math.min(canvasWidth, canvasHeight) / 20;
  }

  var radius = getRandomNumber(10, maxRadius);
  var x = getRandomNumber(radius, canvasWidth - radius);
  var y = getRandomNumber(radius, canvasHeight - radius);

  // Create a new circle object
  var circle = {
    x: x,
    y: y,
    radius: radius
  };

  // Check if the new circle overlaps with any existing circles
  for (var i = 0; i < circles.length; i++) {
    if (circlesOverlap(circle, circles[i])) {
      return generateValidCircle(); // Generate a new circle
    }
  }

  return circle;
}

// Function to draw a circle
function drawCircle(circle) {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fillStyle = getRandomColor();
  ctx.fill();
}

// Draw multiple circles
function drawCircles(count) {
  for (var i = 0; i < count; i++) {
    var circle = generateValidCircle();
    circles.push(circle);
    drawCircle(circle);
  }
}

// Call the drawCircles function to draw circles initially
drawCircles(10);

// Update circle positions on resize and orientation change
function updateCirclePositions() {
  // Update the canvas dimensions
  canvasWidth = window.innerWidth;
  canvasHeight = window.innerHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  // Clear the canvas
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  // Update the positions of the circles based on the new dimensions
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    circle.x = getRandomNumber(circle.radius, canvasWidth - circle.radius);
    circle.y = getRandomNumber(circle.radius, canvasHeight - circle.radius);
    drawCircle(circle);
  }
}

window.addEventListener('resize', updateCirclePositions);
window.addEventListener('orientationchange', updateCirclePositions);
