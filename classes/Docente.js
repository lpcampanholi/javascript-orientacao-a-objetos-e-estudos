import User from "./User.js";

class Docente extends User {
  constructor(nome, sobrenome, email, nascimento, role = "docente", ativo) {
    super(nome, sobrenome, email, nascimento, role, ativo);
  };
  
  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no curso ${curso}`;
  };
  
};

export default Docente;
