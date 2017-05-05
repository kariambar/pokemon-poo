function Pokemon(nombre,color,poderDeAtaque){
	this.nombre = nombre
	this.color = color

	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return('Hola, soy '+ this.nombre + ' y soy de color: ' + this.color)
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad  = this.nivelDeAmistad + valor
		return this.nivelDeAmistad
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		return pokemon.vida
	}
}

const Pikachu = new Pokemon('Pikachu','amarillo',100)
const Charmander = new Pokemon('Charmander','rojo',20)
const Bulbasaur = new Pokemon('Bulbasaur','verde',100)
const Ninetales = new Pokemon('Ninetales','crema',20)

//Pikachu.atacar(Charmander)

//console.log(Charmander.vida)

//poke.innerHTML = Pikachu.mostrarPokemon();

function combat(nombre,color,poderDeAtaque){

	var base = document.getElementById("base");
	var opcion1 = document.getElementById("opcion1").value;
	var opcion2 = document.getElementById("opcion2").value;

	if(opcion1 == opcion2){
		alert("No puedes seleccionar el mismo Pokemón")
	}else{ 

	var poder = prompt("Ingresa nivel de ataque");
	var pelea1 = new Pokemon(opcion1,+ color , + poder);
	var pelea2 = new Pokemon(opcion2, + color, + poderDeAtaque);	
	pelea1.atacar(pelea2);
}
	base.innerHTML = "<br>" + pelea1.nombre + " atacó a "+ pelea2.nombre + " y " + pelea2.nombre +" tiene una vida de: " + pelea2.vida;

}