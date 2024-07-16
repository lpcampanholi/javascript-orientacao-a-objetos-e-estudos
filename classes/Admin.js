import User from "./User.js";

class Admin extends User {
  
  constructor(nome, sobrenome, email, nascimento, role = "admin", ativo = true) {
    super(nome, sobrenome, email, nascimento, role, ativo)
  }


  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }

};

export default Admin;
