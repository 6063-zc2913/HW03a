
let eDiam = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    background("yellow");
    fill("black");
    for(let xpos = 0; xpos <= width; xpos += eDiam) {
        for(let ypos = 0; ypos <= height; ypos+= eDiam) {
            ellipse(xpos, ypos, 3, 3);
            ellipse(xpos + eDiam/2, ypos, 10, 10);
    }

    for(let xpos = eDiam/2 ; xpos <= width; xpos+= eDiam) {
      for(let ypos = eDiam/2 ; ypos <= height; ypos+= eDiam) {
          ellipse(xpos, ypos, 3, 3);
          ellipse(xpos + eDiam/2 , ypos, 10, 10);
      }
  
      }
    
  }
}

