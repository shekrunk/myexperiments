window.onload = draw;

function draw(){
    drawOlympicLogo();
    drawSineWave();
    fillWithGradient();
    //flipText();
}

function fillWithGradient(){
    var canvasRef = document.getElementById('gradients');
    var context = canvasRef.getContext('2d');
    context.rect(0,0,canvasRef.width,canvasRef.height);
    var grd = context.createRadialGradient(150, 75, 40, 150, 75, 80);
    grd.addColorStop(0, 'red');
    grd.addColorStop(0.2, 'yellow');
    grd.addColorStop(0.4, 'green');
    grd.addColorStop(0.6, 'brown');
    grd.addColorStop(1, 'black');

    context.fillStyle = grd;
    context.fill();
    context.lineWidth=7;
    context.strokeStyle='blue';
    context.stroke();
}

function drawSineWave() {
    var canvasRef = document.getElementById('sinewave');
    console.log(canvasRef);
    var context = canvasRef.getContext('2d');
    context.beginPath();
    context.lineWidth=1;
    /*context.lineTo(0, 75);
    context.lineTo(500, 75);*/
    context.stroke();
    context.closePath();
    context.beginPath();
    context.lineWidth=2;
    var x=0, y=75, x1=canvasRef.width, sineAmp=50, intX=x+sineAmp;
    context.moveTo(x, y);
    for(var i=0;i<=(x1/sineAmp);i++) {
        if(i%2==0) {
            context.bezierCurveTo(intX-30, y-20, intX-20, y-20, intX, y);
        } else {
            context.bezierCurveTo(intX-30, y+20, intX-20, y+20, intX, y);
        }
        intX=intX+sineAmp;
    }
    //context.bezierCurveTo(20, 55, 30, 55, 50, 75);
    //context.bezierCurveTo(70, 95, 80, 95, 100, 75);
    context.stroke();
    context.closePath();

}


function drawOlympicLogo() {
    var canvasRef = document.getElementById('olympic');
    var context = canvasRef.getContext('2d');

    var centerX = canvasRef.width / 2;
    var centerY = canvasRef.height / 2;

    var arr = ['blue', 'green', 'yellow'];
    var x = -40,y=-25;
    for (var i = 0; i < arr.length; i++) {
        context.beginPath();
        context.arc(centerX+x, centerY+y, 30, 0, 2 * Math.PI, false);
        context.lineWidth=2;
        context.strokeStyle = arr[i];
        context.stroke();
        context.closePath();
        x=x+40;
    }

    var arr2 = ['brown', 'yellow'];
    var x2 = -20,y2=15;
    for (var i = 0; i < arr2.length; i++) {
        context.beginPath();
        context.arc(centerX+x2, centerY+y2, 30, 0, 2 * Math.PI, false);
        context.lineWidth=2;
        context.strokeStyle = arr2[i];
        context.stroke();
        context.closePath();
        x2=x2+40;
    }
}



