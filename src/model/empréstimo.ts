export class Emprestimo {
  id: string;
  cpfUsuario: string;
  codigoExemplar: string;
  dataEmprestimo: Date;
  dataDevolucao?: Date;

  constructor(cpfUsuario: string, codigoExemplar: string) {
    this.id = crypto.randomUUID();
    this.cpfUsuario = cpfUsuario;
    this.codigoExemplar = codigoExemplar;
    this.dataEmprestimo = new Date();
  }

  registrarDevolucao() {
    this.dataDevolucao = new Date();
  }
}