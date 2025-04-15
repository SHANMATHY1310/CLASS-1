var box;

function setup() {
  createCanvas(300, 300);
  box = createSprite(200, 200, 30, 30);
}

function draw() {
  background(40);

  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 10;
    background(255, 0, 0); // Red background
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 10;
    background(0, 255, 0); // Green background
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 10;
    background(0, 0, 255); // Blue background
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 10;
    background(255, 255, 0); // Yellow background
  }

  drawSprites();
}
