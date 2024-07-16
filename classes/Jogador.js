class Jogador {
  #nome
  #email
  #cpf
   constructor(nome, email, cpf) {
    this.#nome = nome
    this.#email = email
    this.#cpf = cpf
  }
 
  get nome() {
    return this.nome
  }
 }


 const jogador = new Jogador("Davi", "d@d.com", "999.999.999-99");

 console.log(jogador.nome);
 