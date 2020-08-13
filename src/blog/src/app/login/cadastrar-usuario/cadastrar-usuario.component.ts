import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/shared/services/usuario/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Constantes } from 'src/app/shared/constantes';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: string = '';
  senha: string = '';

  constructor(private usuarioService : UsuarioService, 
              private snackBar: MatSnackBar, 
              private storage : StorageService,
              private router : Router,
              private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  criarUsuario() {
    this.usuarioService.criarUsuario(this.usuario, this.senha).subscribe((retorno) => {
      if (retorno.sucesso) {
        this.storage.armazenar(Constantes.CHAVE_STORAGE_AUTH, retorno.resultado);
        this.router.navigate(["/"]);
        this.dialog.closeAll();
      } else {
        this.snackBar.open(retorno.mensagem, "Fechar");
      }
    }, (err) => {      
      this.snackBar.open(err.error, "Fechar");
    });
  }

  atualizarUsuario(usuario) {
    this.usuario = usuario;
  }

  atualizarSenha(senha) {
    this.senha = senha;
  }
}
