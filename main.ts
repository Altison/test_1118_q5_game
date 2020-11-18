input.onButtonPressed(Button.A, function () {
    sprite.move(1)
})
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
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 0)
let x = randint(1, 4)
let y = randint(1, 4)
basic.forever(function () {
    sprite.ifOnEdgeBounce()
    if (sprite.get(LedSpriteProperty.X) == x && sprite.get(LedSpriteProperty.Y) == y) {
        game.gameOver()
    }
})
