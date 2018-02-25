import Paddle from '../Paddle/Paddle.js'

export default class Player {
  constructor (x, y, width, height, ai = false) {
    this.paddle = new Paddle(x, y, width, height)
    this.ai = ai
  }

  draw (context) {
    this.paddle.draw(context)
  }

  update (input) {
    if (this.ai === false) {
      for (var key in input) {
        var value = Number(key)
        if (value === 38) { // up arrow
          this.paddle.move(0, -4)
        } else if (value === 40) { // down arrow
          this.paddle.move(0, 4)
        } else {
          this.paddle.move(0, 0)
        }
      }
    } else if (this.ai === true) {
      var diff = -((this.paddle.y + (this.paddle.height / 2)) - input.y)
      if (diff < 0 && diff < -4) {
        diff = -5
      }
      if (diff > 0 && diff > 4) {
        diff = 5
      }
      this.paddle.move(0, diff)
    }
  }
}
