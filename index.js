class hero{
    constructor(nome, idade, tipo, ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = ataque
    }
    
    atacar(){
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}`)
       	    this.ataque = this.tipo
            switch(this.ataque){
                case "mago": console.log("magia") 
                break
                case "guerreiro": console.log("espada") 
                break
                case "monge": console.log("artes marciais") 
                break
                case "ninja": console.log("shuriken") 
                break
            }
    }
      
}

let heroi1 = new hero
("Joao", "30", "mago", "")
let heroi2 = new hero
("Lucio", "27", "guerreiro", "")
let heroi3 = new hero
("Leonardo", "50", "monge", "")
let heroi4 = new hero
("Naruto", "25", "ninja", "")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()


