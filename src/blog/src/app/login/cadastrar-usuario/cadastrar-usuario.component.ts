import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  criarUsuario() {

  }

  atualizarUsuario(usuario) {
    this.usuario = usuario;
  }

  atualizarSenha(senha) {
    this.senha = senha;
  }
}
