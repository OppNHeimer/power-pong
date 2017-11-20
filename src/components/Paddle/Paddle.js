
export default class Paddle {
  constructor (x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.x_speed = 0
    this.y_speed = 0
  }
  draw (context) {
    context.fillStyle = 'red'
    context.fillRect(this.x, this.y, this.width, this.height)
    // console.log('hello')
  }
}
