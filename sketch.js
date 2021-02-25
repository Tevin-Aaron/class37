var database, playerCount = 0;
var form, player, gameState = 0, game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  form = new Form();
  game = new Game();
  game.get();
  game.start();
}

function draw(){
  background("white");
  form.display();

  /*if(playerCount === 4){
  game.update(1);

  }

  if(gameState === 1){
  game.play();

  }*/
}


