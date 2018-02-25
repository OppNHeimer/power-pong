import React, { Component } from 'react'
import Player from '../Player/Player.js'
import Ball from '../Ball/Ball.js'

export default class Canvas extends Component {
  componentDidMount () {
    var canvas = document.querySelector('canvas')
    var context = canvas.getContext('2d')
    let AI = new Player(10, 335, 10, 50, true)
    let player = new Player(940, 335, 10, 50)
    let ball = new Ball(480, 360)

    window.requestAnimationFrame(step)
    var keysDown = {}
    window.addEventListener('keydown', function (event) {
      keysDown[event.keyCode] = true
    })

    window.addEventListener('keyup', function (event) {
      delete keysDown[event.keyCode]
    })

    function step () {
      update()
      draw()
      window.requestAnimationFrame(step)
    }

    function update () {
      ball.update(AI, player)
      player.update(keysDown)
      AI.update(ball)
    }

    function draw () {
      context.fillStyle = 'blue'
      context.fillRect(0, 0, 960, 720)
      player.draw(context)
      AI.draw(context)
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
