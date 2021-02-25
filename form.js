class Form{
constructor(){


}
display(){
var title = createElement("h1");
title.html("Car Racing Game");
title.position(130,0);

var nameBox = createInput("Name");
nameBox.position(200,160);

var button = createButton("Play");
button.position(250,200);

var greeting = createElement("h3");

button.mousePressed(function(){
nameBox.hide();
button.hide();

var nameList = nameBox.value();
playerCount = playerCount + 1

player.update(nameList);
player.updateCount(playerCount);
greeting.html("Hello" + nameList);
greeting.position(130,160);
})
}



}