import User from "./classes/User.js";
import Admin from "./classes/Admin.js";
import Docente from "./classes/Docente.js";

const mariana = new User("Mariana Lima", "m@m.com", "2021-01-01");
console.log(mariana.exibirInfos());
console.log(mariana.nome);
console.log(mariana.sobrenome);

const admin = new Admin("Rodrigo Manzotti Lima", "r@r.com", "2021-01-01");
console.log(admin.nome);
console.log(admin.sobrenome);

admin.nome = "José Andrade da Costa";
console.log(admin.nome);
console.log(admin.sobrenome);
