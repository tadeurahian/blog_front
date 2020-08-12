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

  constructor(private httpClient: HttpClient) { }

  autenticar(nome : string, senha : string) {
    return this.httpClient.post<RetornoPadrao<Autenticacao>>(environment.backend + this.ROTA_AUTENTICACAO, {
      nome: nome,
      senha: senha
    });
  }
}
