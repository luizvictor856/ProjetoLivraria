export class Livro {
  titulo: string;
  isbn: string;
  autor: string;
  editora: string;
  edicao: string;
  categoria: string;

  constructor(
    titulo: string,
    isbn: string,
    autor: string,
    editora: string,
    edicao: string,
    categoria: string
  ) {
    this.titulo = titulo;
    this.isbn = isbn;
    this.autor = autor;
    this.editora = editora;
    this.edicao = edicao;
    this.categoria = categoria;
  }
}