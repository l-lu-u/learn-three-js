// Get the canvas and set its size
const canvas = document.getElementById('brokenLCD');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Function to draw random cracks
function drawCracks() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        for (let j = 0; j < 5; j++) {
            ctx.lineTo(
                Math.random() * canvas.width,
                Math.random() * canvas.height
            );
        }
        ctx.stroke();
    }
}

// Function to draw vertical and horizontal lines
function drawLines() {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;

    // Vertical lines
    for (let x = 0; x < canvas.width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < canvas.height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
}

// Function to add shading
function addShading() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Main render function
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCracks();
    drawLines();
    addShading();
}

// Draw the broken LCD effect
render();