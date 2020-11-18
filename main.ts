input.onButtonPressed(Button.AB, function () {
    if (sprite.get(LedSpriteProperty.Direction) == 0) {
        sprite.turn(Direction.Right, 90)
    } else {
        sprite.turn(Direction.Left, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.turn(Direction.Right, 180)
    sprite.move(1)
    sprite.turn(Direction.Right, 180)
})
let list: number[] = []
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
basic.forever(function () {
    sprite.ifOnEdgeBounce()
    list = [sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y)]
    radio.sendString("" + (list))
    if (sprite.get(LedSpriteProperty.X) == 4 && sprite.get(LedSpriteProperty.Y) == 4) {
        basic.showNumber(0)
        game.gameOver()
    }
})
