import { Usuario } from "../model";

export class UsuarioRepository {
  private static instance: UsuarioRepository;
  private usuarios: Usuario[] = [];

  private constructor() {}

  public static getInstance(): UsuarioRepository {
    if (!this.instance) {
      this.instance = new UsuarioRepository();
    }
    return this.instance;
  }

  adicionar(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  listar(): Usuario[] {
    return this.usuarios;
  }

  buscarPorCpf(cpf: string): Usuario | undefined {
    return this.usuarios.find(u => u.cpf === cpf);
  }

  remover(cpf: string): boolean {
    const index = this.usuarios.findIndex(u => u.cpf === cpf);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return true;
    }
    return false;
  }
}
