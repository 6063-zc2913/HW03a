

let eDiam = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("yellow");
    fill("black");
    for(let xpos = 0; xpos <= width; xpos+= eDiam) {
        for(let ypos = 0; ypos <= height; ypos+= eDiam) {
            ellipse(xpos, ypos, 5, 5);
    }

    for(let xpos = 15; xpos <= width; xpos+= eDiam) {
      for(let ypos = 0; ypos <= height; ypos+= eDiam) {
          ellipse(xpos, ypos, 15, 15);
      }
    }
  }
}
