
export default class Paddle {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.xSpeed = 0
    this.ySpeed = 0
  }
  draw (context) {
    context.fillStyle = 'red'
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  move (x, y) {
    this.x += x
    this.y += y
    this.xSpeed = x
    this.ySpeed = y
    if (this.y < 0) { // all the way up
      this.y = 0
    }
    if (this.y > 670) { // all the way down
      this.y = 670
    }
  }
}
