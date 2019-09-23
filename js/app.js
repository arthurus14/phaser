const config = {

    width: 500,
    height: 300,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }

}

var game = new Phaser.Game(config);
let player;
let cursor;


function preload() {
    this.load.image('player', 'images/player.png');
}

function create() {
    player = this.physics.add.image(100, 100, 'player');
    player.body.collideWorldBounds = true;

    cursor = this.input.keyboard.createCursorKeys();
    //console.log(cursor);
}

function update() {
    player.setVelocityX(0);

    if (cursor.up.isDown) {
        player.setVelocity(0, -300);
    }
    if (cursor.right.isDown) {
        player.setVelocity(100, 0);
    }
    if (cursor.left.isDown) {
        player.setVelocity(-100, 0);
    }


}