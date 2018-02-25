export default class Ball {
  constructor (x, y) {
    this.x = x
    this.y = y
    this.xSpeed = 3
    this.ySpeed = 3
    this.radius = 6
  }
  draw (context) {
    context.beginPath()
    context.arc(this.x, this.y, this.radius, 2 * Math.PI, false)
    context.fillStyle = 'yellow'
    context.fill()
  }

  update (player1, player2) {
    this.x += this.xSpeed
    this.y += this.ySpeed
    var ballLeft = this.x - 6
    var ballTop = this.y - 6
    var ballRight = this.x + 6
    var ballBottom = this.y + 6

      // ball hits top wall
    if (ballTop < 0) {
      this.y = 6
      this.ySpeed = -this.ySpeed
    }
      // ball hits bottom wall
    if (ballBottom > 720) {
      this.y = 714
      this.ySpeed = -this.ySpeed
    }
      // point is scored
    if (this.x < 0 || this.x > 960) {
      this.xSpeed = 3
      this.ySpeed = 3
      this.x = 480
      this.y = 360
    }
      // ball hits player 1 paddle
    if (ballLeft < 20 &&
        ballLeft > 15 &&
        ballTop < player1.paddle.y + player1.paddle.height &&
        ballBottom > player1.paddle.y) {
      this.xSpeed = -this.xSpeed
    }
      // ball hits player 2 paddle
    if (ballRight > 940 &&
        ballRight < 945 &&
        ballTop < player2.paddle.y + player2.paddle.height &&
        ballBottom > player2.paddle.y) {
      this.xSpeed = -this.xSpeed
    }
  }
}
