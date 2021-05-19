class Game{
constructor(){

}
getState(){
database.ref('gameState').on('value',(data)=>{
gameState=data.val()
})
}
updateState(x){
database.ref('/').update({
    gameState:x
})
}
}