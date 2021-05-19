class Player{
constructor(){

}
getCount(){
    database.ref('playerCount').on('value',(data)=>{
    playerCount=data.val()
    })
    }
    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
        }
        }


