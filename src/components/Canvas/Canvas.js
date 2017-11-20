import React, { Component } from 'react'
import Player from '../Player/Player.js'
import Ball from '../Ball/Ball.js'

export default class Canvas extends Component {
  componentDidMount () {
    var canvas = document.querySelector('canvas')
    var context = canvas.getContext('2d')
    let player1 = new Player(10, 335, 10, 50)
    let player2 = new Player(940, 335, 10, 50)
    let ball = new Ball(480, 360)
    console.log(ball)

    window.requestAnimationFrame(step)

    function step () {
      update()
      draw()
      window.requestAnimationFrame(step)
    }

    function update () {
      ball.update(player1, player2)
    }

    function draw () {
      context.fillStyle = 'blue'
      context.fillRect(0, 0, 960, 720)
      player1.draw(context)
      player2.draw(context)
      ball.draw(context)
    }
  }
  render () {
    return (
      <div>
        <canvas width='960' height='720' />
      </div>
    )
  }
}
