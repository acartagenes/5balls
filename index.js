// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [0,225,190];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 3 });

const ball1 = {
    x: 300,
    y: 300,
    size: 30,
    speed: 2,
    fillColor: [255,51,153],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[1],
    leftSound: sounds[2],
    soundLength: 2000,
} 

const ball2 = {
    x: 300,
    y: 100,
    size: 30,
    speed: 2,
    fillColor: [178,102,255],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[1],
    leftSound: sounds[2],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    size: 30,
    speed: 4,
    fillColor: [0,0,255],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[1],
    leftSound: sounds[2],
    soundLength: 500,
} 

const ball4 = {
    x: 300,
    y: 400,
    size: 30,
    speed: 1,
    fillColor: [255,102,102],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[1],
    leftSound: sounds[2],
    soundLength: 2000,
} 

const ball5 = {
    x: 300,
    y: 500,
    size: 30,
    speed: 3,
    fillColor: [51,153,255],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[1],
    leftSound: sounds[2],
    soundLength: 2000,
} 

const leftEdge = {
    x1: 110,
    y1: 0,
    x2: 110,
    y2: 600,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 470,
    y1: 0,
    x2: 470,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}


const balls = [ball1, ball2, ball3, ball4, ball5];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[1];
    ball1.leftSound = sounds[2];
    ball2.rightSound = sounds[1];
    ball2.leftSound = sounds[2];
    ball3.rightSound = sounds[1];
    ball3.leftSound = sounds[2];
    ball4.rightSound = sounds[1];
    ball4.leftSound = sounds[2];
    ball5.rightSound = sounds[1];
    ball5.leftSound = sounds[2];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}


const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}