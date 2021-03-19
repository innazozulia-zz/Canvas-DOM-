const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// fillRect()
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = '#fff200';
ctx.fillRect(200, 20, 150, 100);

//strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = '#a1eafb';
ctx.strokeRect(100, 200, 150, 100);

//clearRect
ctx.clearRect(25, 25, 140, 90);

//fillText
ctx.font = '30px Akaya Telivigala';
ctx.fillStyle = '#ffcef3';
ctx.fillText('Hello' , 400, 50);

//strokeText
ctx.lineWidth = 1;
ctx.strokeStyle = '#cabbe9';
ctx.strokeText('Hello', 400, 100);

paths (треугольники)
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150, 50);
ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle = '#ffcef3';
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(150 , 200);
ctx.lineTo(250, 200);
ctx.lineTo(200, 50);
// ctx.closePath();
ctx.stroke();

//квадрат
ctx.beginPath();
ctx.rect(300, 50, 150, 100);
ctx.fillStyle = 'green';
ctx.fill();

круг (circles)
ctx.beginPath();
const centerX = canvas.width/2;
const centerY = canvas.height/2;
// draw head
ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
//draw mouth
ctx.moveTo(centerX + 100 , centerY);
ctx.arc(centerX, centerY,  100, 0, Math.PI, false);
//draw left eye
ctx.moveTo(centerX - 60, centerY - 80);
ctx.arc(centerX - 80, centerY - 80, 20, 0, Math.PI * 2);
//draw rigth eye
ctx.moveTo(centerX + 100, centerY - 80);
ctx.arc(centerX + 80, centerY - 80, 20, 0, Math.PI * 2);
ctx.stroke();


home
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();




//Animation 1 

const circle = {
    x: 200,
    y: 200,
    size: 30,
    dx: 5,
    dy: 4,
}
function drawCircle(){
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
    ctx.fillStyle = '#a1eafb';
    ctx.fill();
}
function update(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawCircle();
    //change possition 
    circle.x += -circle.dx;
    circle.y += circle.dy;

    //detect side walls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
       circle.dx *= -1;
    }
    //detect top and bottom walls
    if(circle.y + circle.size > canvas.height || circle.y - circle.size < 0){
        circle.dy *= -1;
    }
    requestAnimationFrame(update);
}
update();
