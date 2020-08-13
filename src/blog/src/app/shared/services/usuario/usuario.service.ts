import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetornoPadrao } from '../../models/retorno-padrao.model';
import { Autenticacao } from '../../models/autenticacao.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private ROTA_AUTENTICACAO : string = 'usuario/autenticar';
  private CRIAR_USUARIO : string = 'usuario'

  constructor(private httpClient: HttpClient) { }

  autenticar(nome : string, senha : string) {
    return this.chamadaUsuario(nome, senha, this.ROTA_AUTENTICACAO);
  }

  criarUsuario(nome : string, senha : string) {
    return this.chamadaUsuario(nome, senha, this.CRIAR_USUARIO);
  }

  private chamadaUsuario(nome : string, senha : string, chamada : string) {
    return this.httpClient.post<RetornoPadrao<Autenticacao>>(environment.backend + chamada, {
      nome: nome,
      senha: senha
    });
  }
}
