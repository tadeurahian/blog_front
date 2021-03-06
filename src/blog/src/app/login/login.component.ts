import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { UsuarioService } from '../shared/services/usuario/usuario.service';
import { StorageService } from '../shared/services/storage/storage.service';
import { Constantes } from '../shared/constantes';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public senha: string = '';
  public usuario: string = '';

  constructor(public dialog: MatDialog, 
              public usuarioService: UsuarioService, 
              public storage: StorageService, 
              public snackBar: MatSnackBar,
              public router : Router) { }

  ngOnInit(): void {
  }

  abrirCadastroUsuario() {
    this.dialog.open(CadastrarUsuarioComponent);
  }

  autenticar() {
    this.usuarioService.autenticar(this.usuario, this.senha).subscribe((retorno) => {
      if (retorno.sucesso) {
        this.storage.armazenar(Constantes.CHAVE_STORAGE_AUTH, retorno.resultado);
        this.router.navigate(["/"]);
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
