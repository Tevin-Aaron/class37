class Player{
constructor(){


}
get(){
var ref = database.ref("PlayerCount")
ref.on("value",function(data){
playerCount = data.val();

})

}

updateCount(count){
database.ref("/").update({
    PlayerCount : count
})

}

update(name){
var playerIndex = "player" + PlayerCount
database.ref(playerIndex).set({
    name : name
})

}

}