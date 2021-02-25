class Game{
constructor(){


}
get(){
database.ref("GameState").on("value", function(data){
    gameState = data.val();
})


}
update(option){
database.ref("/").update({
    GameState : option

})
}

start(){
if(gameState === 0){
player = new Player();
player.get();
form = new Form();
form.display();

}




}
}