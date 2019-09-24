//configutation de la scène
const config = {

        width: 900,
        height: 500,
        //Phaser.AUTO => si supporte webGL ok, sinon créer un canvas
        type: Phaser.AUTO,
        //apporte la physique
        physics: {
            default: 'arcade',
            //Créer la gravitée verticale
            arcade: {
                gravity: { y: 600 }
            }
        },
        //charge les trois fonctions de bases
        scene: {
            preload: preload,
            create: create,
            update: update
        }

    }
    //Instance de l'objet game
var game = new Phaser.Game(config);
let player;
let cursor;


function preload() {
    //Chargement des ressources
    this.load.image('player', 'images/player.png');
    this.load.image('sky', 'images/sky.png');
    this.load.image('ground', 'images/ground.png');
}

function create() {
    //Affichage des éléments, l'ordre est important
    sky = this.add.image(500, 300, 'sky');

    // ground = this.add.image(400, 400, 'ground');

    platforms = this.physics.add.staticGroup();

    //setScale(6) multiplie l'image par 6
    platforms.create(400, 500, 'ground').setScale(6).refreshBody();

    platforms.create(500, 400, 'ground');


    player = this.physics.add.image(400, 100, 'player');

    //Attribue un collider aux objets en paramètres
    this.physics.add.collider(player, platforms);



    cursor = this.input.keyboard.createCursorKeys();
    //console.log(cursor);
}

function update() {
    //Remet à 0 à chaque boucle
    player.setVelocityX(0);
    //Ecoute le clavier
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