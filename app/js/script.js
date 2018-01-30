var canvas = document.getElementById('universe');
var ctx = canvas.getContext('2d');

let x = 155;
let y = 30;

var drawSpaceship = function () {
	//Nose
	ctx.fillStyle = '#fff';
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x - 6, y + 6);
	ctx.lineTo(x + 6, y + 6);
	ctx.fill();
	//Body
	ctx.fillStyle = '#fff';
	ctx.fillRect(x - 6, y + 6, 12, 12);
}

drawSpaceship();