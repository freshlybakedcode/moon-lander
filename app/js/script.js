var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

let x = 155;
let y = 30;
const gravityStrength = 1;

const spaceship = {
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
		y += gravityStrength;
	}
}

document.body.onkeydown = function (e) {
	if (e.keyCode == 32) {
		console.log('onKeyDown');
		y -= 1;
	}
}

var interval = setInterval(function () {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	spaceship.applyGravity();
	spaceship.draw('#fff');
}, 100);

// setTimeout(function() {
//   clearInterval(interval);
// });