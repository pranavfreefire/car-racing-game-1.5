var  database;
var form,gameState,playerCount


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  form=new Form()
  form.display()
game=new Game()
game.getState()
player=new Player()
player.getCount()
 
}

