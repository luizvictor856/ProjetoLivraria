export class Estoque {
  codigo: string; // código único do exemplar
  isbnLivro: string; // ISBN do livro ao qual pertence
  disponivel: boolean;

  constructor(codigo: string, isbnLivro: string, disponivel: boolean = true) {
    this.codigo = codigo;
    this.isbnLivro = isbnLivro;
    this.disponivel = disponivel;
  }
}