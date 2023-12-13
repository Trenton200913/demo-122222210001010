scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    game.gameOver(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy += -111
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = -200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    tiles.setCurrentTilemap(tilemap`level10`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vx = 200
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.vy += -90
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
    tiles.setCurrentTilemap(tilemap`level13`)
})
let mySprite: Sprite = null
scene.setBackgroundColor(8)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite.setBounceOnWall(true)
forever(function () {
    mySprite.vy = 100
})
