import { Usuario } from "../model/usuario";
import { UsuarioRepository } from "../repository/usuarioRepository";
export class UsuarioService {
  private repo = UsuarioRepository.getInstance();

  cadastrarUsuario(data: any): Usuario {
    const { nome, cpf, email, categoria, curso } = data;

    if (!nome || !cpf || !email || !categoria || !curso) {
      throw new Error("Todos os campos são obrigatórios.");
    }

    const jaExiste = this.repo.buscarPorCpf(cpf);
    if (jaExiste) {
      throw new Error("Já existe um usuário com este CPF.");
    }

    const novoUsuario = new Usuario(nome, cpf, email, categoria, curso);
    this.repo.adicionar(novoUsuario);
    return novoUsuario;
  }

  listarUsuarios(): Usuario[] {
    return this.repo.listar();
  }

  buscarUsuarioPorCpf(cpf: string): Usuario {
    const usuario = this.repo.buscarPorCpf(cpf);
    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }
    return usuario;
  }
}
