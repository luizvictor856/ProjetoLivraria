export type StatusUsuario = "ativo" | "inativo" | "suspenso";

export class Usuario {
  nome: string;
  cpf: string;
  email: string;
  categoria: string; // Ex: "Aluno", "Professor", "Bibliotecário"
  curso: string;
  status: StatusUsuario;

  constructor(nome: string, cpf: string, email: string, categoria: string, curso: string) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.categoria = categoria;
    this.curso = curso;
    this.status = "ativo"; // status padrão
  }
}