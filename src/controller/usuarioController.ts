import { Request, Response } from "express";
import { UsuarioService } from "../service/usuarioService";

const service = new UsuarioService();

export class UsuarioController {
  static cadastrar(req: Request, res: Response) {
    try {
      const usuario = service.cadastrarUsuario(req.body);
      res.status(201).json({ mensagem: "Usuário cadastrado!", usuario });
    } catch (err: any) {
      res.status(400).json({ erro: err.message });
    }
  }

  static listar(req: Request, res: Response) {
    const usuarios = service.listarUsuarios();
    res.status(200).json(usuarios);
  }

  static buscarPorCpf(req: Request, res: Response) {
    try {
      const usuario = service.buscarUsuarioPorCpf(req.params.cpf);
      res.status(200).json(usuario);
    } catch (err: any) {
      res.status(404).json({ erro: err.message });
    }
  }
}
