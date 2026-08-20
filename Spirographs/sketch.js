// Constants for the canvas size
const width = 1024;
const height = 1024;

// Radius of the circles
let radius1 = 220;
let radius2 = 180
let radius3 = 300

// Speed of the circles
let time = 0;
let time2 = 0;
let time3 = 0;

// Previous positions of the circles 2 and 3
let old_x2
let old_y2

let old_x3
let old_y3

const velocity = 1;
//let empezar = false;

function setup() {
    createCanvas(width, height);
    background('#1c0e33');
    noFill();

    stroke(155);
    strokeWeight(4);

    radius1 = random(100, 200); 
    radius2 = random(100, 200);
    radius3 = random(200, 300);

    speed1 = random(0, 0.25);
    speed2 = random(0, 0.25);
    speed3 = random(0, 0.25);

    //setTimeout(() => { empezar = true; }, 3000);
}

function draw() {
    //if (!empezar) return;
    
    // Its executed velocity times per frame, so we can control the speed of the animation
    for (let i = 0; i < velocity; i ++) {
        // First circle
        let x = width/2 + sin(time) * radius1;
        let y = height/2 + cos(time) * radius1;
        time += speed1;

        // Second circle
        let x2 = x + sin(1.5*time2) * radius2
        let y2 = y + cos(1.5*time2) * radius2
        time2 += speed2;

        // Third circle
        let x3 = x + sin(1.5*time3) * radius3
        let y3 = y + cos(1.5*time3) * radius3
        time3 += speed3;

        // Draw the second circle
        stroke(80, 20 - time3%255, 100 + time3%255)
        point(x2,y2)
        line(old_x2, old_y2, x2, y2)

        // code for the third circle is commented out, but you can uncomment it if you want to draw it as well
        // stroke(20, 100 + time3%255, 100 - time3%255)
        // point(x3, y3)
        // line(old_x3, old_y3, x3, y3)

        old_x2 = x2
        old_y2 = y2

        old_x3 = x3
        old_y3 = y3
    }
}

//function to draw a circle in a given position (not used currently)
function draw_circle (x0, y0) {
    for (let i = 0; i < TWO_PI; i += TWO_PI/360) {
        let x = x0 + sin(i) * radius1;
        let y = y0 + cos(i) * radius1;
        point(x, y);
    }
}