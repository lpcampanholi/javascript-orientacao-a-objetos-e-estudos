import User from "./User.js";

class Admin extends User {
  
  constructor(nomeCompleto, email, nascimento, role = "admin", ativo = true) {
    super(nomeCompleto, email, nascimento, role, ativo)
  };


  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  };

  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`;
  };

};

export default Admin;
