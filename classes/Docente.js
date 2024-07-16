import User from "./User.js";

class Docente extends User {
  constructor(nomeCompleto, email, nascimento, role = "docente", ativo) {
    super(nomeCompleto, email, nascimento, role, ativo);
  };
  
  aprovaEstudante(estudante, curso) {
    return `Estudante ${estudante} aprovado no curso ${curso}`;
  };
  
};

export default Docente;
