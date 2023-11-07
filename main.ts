/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program shows a while loop
*/

// variables
let sprite: game.LedSprite = null
let loopCounter: number = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()

// press "A" button
input.onButtonPressed(Button.A, function() {
  // setup
  basic.clearScreen()
  loopCounter = 0
  sprite = game.createSprite(0, 0)

  while (loopCounter <= 5) {
    basic.pause(500)
    sprite.set(0, loopCounter)

    loopCounter = loopCounter + 1
  }
})