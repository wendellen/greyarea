var img1;
var img2;
var img3;
var bg;
var dolphins = [];

function preload() {
  img1 = loadImage("imgs/anime-eyes-2.png")
  img2 = loadImage("imgs/eyedrops-dolphin-4.png")
  img3 = loadImage("imgs/dolphin-emoji-4.png")
}

function dolphinDrop() {
  this.image = img3
  this.x = mouseX - 60
  this.y = mouseY
  this.speed = 4
  this.framesHasBeenInEye = 0

  this.drawAndUpdate = function() {
    image(this.image, this.x, this.y);
    this.y = this.y + this.speed
  }
}

function setup() {
  bg = loadImage("imgs/pastel-hearts-bg.gif");
  createCanvas(1366, 768);
  noCursor();
}

function draw() {
  background(bg);
  image(img1, 230, 175);
  image(img2, mouseX, mouseY-150);

  dolphins.forEach( function( dolphin ) {
    dolphin.drawAndUpdate();

    if ( (((dolphin.x>=320) && (dolphin.x<=510)) || ((dolphin.x>=790) && (dolphin.x<=990))) && ((dolphin.y>=405) && (dolphin.y<=410)) ) {
      dolphin.framesHasBeenInEye = dolphin.framesHasBeenInEye + 1;

      if ( dolphin.framesHasBeenInEye == 1 ) {
        dolphinCry( dolphin.x, dolphin.y + 10 );
        dolphin.y = 5000
        // console.log ("birthDolphin")
      }
    }
  })
}

function birthDolphin( startX, startY, speed ) {
  var dol = new dolphinDrop()
  dol.x = startX
  dol.y = startY
  dol.speed = speed || 4
  // dol.speed = (Math.random() * 5) + 1
  dolphins.push( dol );
}

function dolphinCry( startX, startY ) {
  birthDolphin( startX, startY, (Math.random() * 2 ) + 2 );
  setTimeout( function(){
    dolphinCry( startX, startY )
  }, 500);
}

function mouseClicked() {
  birthDolphin( mouseX-60, mouseY );
  // d.x = d.x + 70 * Math.random()
  // d.y = d.y - 70 * Math.random()
}
