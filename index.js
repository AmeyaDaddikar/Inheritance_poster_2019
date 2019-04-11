$("#faq-btn").click(function() {
  $("#faq-div").fadeToggle();
});

ScrollReveal().reveal('.clearfix', { delay: 800 });
////////////////////////////////////CANVAS///////////////////////////
var cnv, coc_logo, github_logo, html_logo, brain_img, cpp_logo, python_logo, android_logo;

function preload() {
  coc_logo    = loadImage('images/coc_logo_small.png');
  github_logo = loadImage('images/github.png');
  html_logo   = loadImage('images/html_5.png')
  brain_img   = loadImage('images/Android_2x.png');
  cpp_logo    = loadImage('images/cpp_logo.png');
  python_logo = loadImage('images/python.png');
  android_logo= loadImage('images/android.png');
}

function setup() {
  
  const canvasDims = displayWidth < 400 ? displayWidth - 10: 400;
  cnv = createCanvas(canvasDims, canvasDims);
  cnv.parent('planets');

  cnv.addClass('d-block');
  cnv.addClass('mx-auto');

  github_logo.resize(80, 0);
  html_logo.resize(60, 0);
  brain_img.resize(70, 0);
  cpp_logo.resize(60, 0);
  python_logo.resize(50, 0);
  android_logo.resize(55, 0);


}

function windowResized() {
  setup();
}

function draw() {

  background(36, 27, 35);
  push();
//  rotate(frameCount / 20);
  image(coc_logo, width / 2 - coc_logo.width / 2, height / 2 - coc_logo.height / 2);
  pop();

  noStroke();
  fill('rgba(36, 27, 35, 0.3)');
  circle(width / 2, height / 2, 65);

  noFill();
  stroke('rgba(194, 187, 134, 0.4)');
  strokeWeight(1.8);
  circle(width / 2, height / 2, 105);
  circle(width / 2, height / 2, 140);
  circle(width / 2, height / 2, 175);


  push();

  noStroke();
  fill('rgba(194, 187, 134, 0.8)');
  circle(width / 2 + 105 * cos(2*PI/4 + frameCount / 90), height / 2 + 105 * sin(2*PI/4  + frameCount / 90), 6);
  circle(width / 2 + 140 * cos(6*PI/7 + frameCount / 90), height / 2 + 140 * sin(6*PI/7 + frameCount / 90), 8);
  circle(width / 2 + 175 * cos(PI/4 + frameCount / 90), height / 2 + 175 * sin(PI/4 + frameCount / 90), 7);
  circle(width / 2 + 140 * cos(5*PI/12 + frameCount / 90), height / 2 + 140 * sin(5*PI/12 + frameCount / 90), 12);
  circle(width / 2 + 175 * cos(5*PI/4 + frameCount / 90), height / 2 + 175 * sin(5*PI/4 + frameCount / 90), 15);
  circle(width / 2 + 105 * cos(8*PI/6 + frameCount / 90), height / 2 + 105 * sin(8*PI/6 + frameCount / 90), 6);
  
  image(
    github_logo, 
    width / 2 - github_logo.width / 2   + 155 * cos(4*PI/2 + frameCount / 90), 
    height / 2 - github_logo.height / 2 + 155 * sin(4*PI/2 + frameCount / 90)
  );
  
  image(
    html_logo, 
    width / 2 - html_logo.width / 2   + 140 * cos(3*PI/2 + frameCount / 90), 
    height / 2 - html_logo.height / 2 + 140 * sin(3*PI/2 + frameCount / 90)
  );

  push();
  tint(123,123);
  image(
    brain_img, 
    width / 2 - brain_img.width / 2   + 140 * cos(9*PI/14 + frameCount / 90), 
    height / 2 - brain_img.height / 2 + 140 * sin(9*PI/14 + frameCount / 90)
  );
  pop();

  image(
    cpp_logo, 
    width / 2 - cpp_logo.width / 2   + 135 * cos(18*PI/17 + frameCount / 90), 
    height / 2 - cpp_logo.height / 2 + 135 * sin(18*PI/17 + frameCount / 90)
  );

  image(
    android_logo, 
    width / 2 - android_logo.width / 2   + 135 * cos(21*PI/12 + frameCount / 90), 
    height / 2 - android_logo.height / 2 + 135 * sin(21*PI/12 + frameCount / 90)
  );

  image(
    python_logo, 
    width / 2 - python_logo.width / 2   + 130 * cos(25*PI/4 + frameCount / 90), 
    height / 2 - python_logo.height / 2 + 130 * sin(25*PI/4 + frameCount / 90)
  );


  pop();

  push();
  fill(`rgba(47, 64, 74, ${abs(sin(frameCount / 60))})`);
  noStroke();
  for(let i = 0 ; i < 360; i += 5) {
    const theta1 = (i + frameCount / 10) * PI / 180;
    const theta2 = (i + frameCount / 5 + 0.5) * PI / 180;
    const theta3 = (i + frameCount / 3 + 0.5) * PI / 180;

    circle(width / 2 + 70 * cos(theta1 ), height / 2 + 70 * sin(theta1), 2);
    circle(width / 2 + 75 * cos(theta2), height / 2 + 75 * sin(theta2), 1.5);
    circle(width / 2 + 80 * cos(theta3), height / 2 + 80 * sin(theta3), 1);

  }


  pop();

}