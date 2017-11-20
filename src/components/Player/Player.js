import Paddle from '../Paddle/Paddle.js'

export default class Player {
  constructor (x, y, width, height) {
    this.paddle = new Paddle(x, y, width, height)
  }

  draw (context) {
    this.paddle.draw(context)
  }
}
