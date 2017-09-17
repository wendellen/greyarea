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
  this.speed = 3
  this.framesHasBeenInEye = 0

  this.drawAndUpdate = function() {
    image(this.image, this.x, this.y);
    this.y = this.y + this.speed
  }
}

// function dolphinTear() {
//   this.image = img3
//   this.x = 370
//   this.y = 420
//
//   this.cry = function() {
//     image(this.image, this.x, this.y);
//     this.y = this.y + 5
//   }
// }

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

    if ( (((dolphin.x>=370) && (dolphin.x<=550)) || ((dolphin.x>=830) && (dolphin.x<=1015))) && ((dolphin.y>=415) && (dolphin.y<=420)) ) {
      dolphin.framesHasBeenInEye = dolphin.framesHasBeenInEye + 1;

      if ( dolphin.framesHasBeenInEye == 1 ) {
        birthDolphin( dolphin.x, dolphin.y + 10 );
        birthDolphin( dolphin.x + 10, dolphin.y + 10 );
        birthDolphin( dolphin.x + 20, dolphin.y + 10 );
        dolphin.y = 5000
        console.log ("birthDolphin")
      }
    }
  })
}

function birthDolphin( startX, startY ) {
  var dol = new dolphinDrop()
  dol.x = startX
  dol.y = startY
  dol.speed = (Math.random() * 5) + 1
  dolphins.push( dol );
}

function mouseClicked() {
  // birthDolphin( 500, 100 );
  birthDolphin( mouseX-60, mouseY );
  // console.log( "mouse clicked at", mouseX, mouseY )
  // d.x = d.x + 70 * Math.random()
  // d.y = d.y - 70 * Math.random()

}
