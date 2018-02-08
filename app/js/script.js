var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

let x = 155;
let y = 30;
let keyState = {};    
const gravityStrength = 1.002;
const windStrength = 0.01;
const rocketPower = 0.3;
const terminalVelocity = 60;

let speed = document.querySelector('.speed');
let fuel = document.querySelector('.fuel');

const spaceship = {
	fuel: 500,
	draw: function (color) {
		//Nose
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x - 6, y + 6);
		ctx.lineTo(x + 6, y + 6);
		ctx.fill();
		//Body
		ctx.fillStyle = color;
		ctx.fillRect(x - 6, y + 6, 12, 12);
	},
	applyGravity: function () {
		if (y < terminalVelocity) {
			y = y * gravityStrength;
		} else {
			y = y + (rocketPower / 2);
		}
	},
	applyWind: function () {
		x += windStrength;
	}
};

var updateStats = function() {
	speed.textContent = `Speed: ${y.toFixed(1)}`;
	fuel.textContent = `Fuel: ${spaceship.fuel}`;
};

window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);    
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

var interval = setInterval(function () {
	if (keyState[32]) {	//spacebar
		if (y > 0.1) {
			y -= rocketPower;
		}
		spaceship.fuel--;
	}
	if (keyState[37] || keyState[65]){	//left
        x -= 1;
    }    
    if (keyState[39] || keyState[68]){	//right
        x += 1;
    }

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	spaceship.applyGravity();
	spaceship.applyWind();
	spaceship.draw('#fff');
	updateStats();
}, 10);

// setTimeout(function() {
//   clearInterval(interval);
// });