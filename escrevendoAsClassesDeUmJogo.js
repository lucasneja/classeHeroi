// Definição da classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
   atacar() {
    let ataque;
    switch (this.tipo) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'não é um guerreiro, mas usou um ateque irado';
    }
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi('Aragorn', 40, 'guerreiro');
heroi1.atacar();
const heroi2 = new Heroi('Gandalf', 200, 'mago');
heroi2.atacar();
const heroi3 = new Heroi('Bruce Lee', 30, 'monge');
heroi3.atacar();
const heroi4 = new Heroi('Naruto', 14, 'ninja');
heroi4.atacar();