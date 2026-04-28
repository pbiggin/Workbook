function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background('yellow');
  strokeWeight(5);

}


function draw() {
  fill('black');
  quad(200, 200, 200, 500, 800, 300, 600, 100, 100, 300);
  triangle(600, 600, 400, 400, 600, 300);
   triangle(800, 500, 800, 300, 600, 300); 
   triangle(230, 700, 200, 500, 400, 435);
   triangle(350, 900, 160, 800, 260, 630);
   fill('white');
      fill('black');
          circle( 660, 610, 40);
          circle( 455, 610, 40);
     line(500, 740, 550, 770); 
     line(600, 740, 550, 770); 
     line(600, 740, 590, 715); 
     line(590, 715, 575, 600); 
     
     line(500, 700, 600, 507); 
     line(590, 690, 539, 500); 
     

     line(400, 520, 500, 540); 
     line(350, 540, 400, 520); 
     line(610, 540, 700, 520); 
     line(720, 540, 700, 520); 
     
     line(780, 450, 720, 710); 
     line(720, 710, 600, 900); 
     line(450, 800, 580, 810); 
     line(340, 880, 600, 900); 
 
     
     
     fill(0, 0);
      quad(300, 500, 540, 500, 500, 700, 290, 650);
      quad(600, 510, 790, 500, 800, 690, 590, 690);
      circle( 590, 700, 10);
      
}
