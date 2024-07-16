class User {

  #nome
  #sobrenome
  #email
  #nascimento
  #role
  #ativo

  constructor(nomeCompleto, email, nascimento, role, ativo = true) {
    this.#separaNomeSobrenomeESalva(nomeCompleto),
    this.#email = email,
    this.#nascimento = nascimento,
    this.#role = role || "Estudante",
    this.#ativo = ativo
  };

  #separaNomeSobrenomeESalva(nomeCompleto) {
    let [nome, ...sobrenome] = nomeCompleto.split(" ");
    sobrenome = sobrenome.join(" ");
    this.#nome = nome;
    this.#sobrenome = sobrenome;
  };

  get nome() {
    return `${this.#nome} ${this.#sobrenome}`;
  };

  get email() {
    return this.#email;
  };

  get nascimento() {
    return this.#nascimento;
  };

  get role() {
    return this.#role;
  };

  get ativo() {
    return this.#ativo;
  };

  set nome(novoNome) {
    if (novoNome === '') {
      throw new Error("Formato não válido");
    }
    this.#separaNomeSobrenomeESalva(novoNome);
  };

  exibirInfos() {
    return `Informações: ${this.#nome} ${this.#sobrenome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`;
  };

};

export default User;
