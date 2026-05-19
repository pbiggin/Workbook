function setup() {
createCanvas(windowWidth, windowHeight);
background(255,255,0)
rectMode(CENTER);
textSize(15);
}


function draw() {
circle(mouseX, mouseY, 20-abs(mouseX-pmouseX));
line(pmouseX, pmouseY, mouseX, mouseY);

if (mouseIsPressed){
fill("orange");
} 
else {
fill("white");
}
}
