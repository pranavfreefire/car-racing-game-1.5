class Form{
constructor(){
this.heading =createElement('h1','car racing game')
this.heading.position(250,50)
this.input=createInput('name')
this.input.position(250,200)
this.button=createButton('play')
this.button.position(300,300)
}
display(){
    this.button.mousePressed(()=>{
        this.heading.hide()
        this.input.hide()
        this.button.hide()
        this.greeting1=createElement('h5','wait for the other players to join')
        this.greeting1.position(250,250)
        playerCount=playerCount+1
        player.updateCount(playerCount)
        var name=this.input.value()
        this.greeting2=createElement('h5')
        this.greeting2.html('hello '+ name)
        this.greeting2.position(250,200)
    })
}
}