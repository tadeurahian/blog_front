import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RetornoPadrao } from '../../../shared/models/retorno-padrao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  titulo : string = '';
  texto : string = '';
  imagens : FileList;
  link: string = '';

  constructor(private postService : PostService,
              private snackBar: MatSnackBar,
              private router : Router) { }

  ngOnInit(): void {
  }

  criarPost() {
    debugger;

    this.postService.criarPost(this.titulo, this.texto, this.imagens, this.link).then((retorno : RetornoPadrao<string>) => {
      if(retorno.sucesso) {        
        this.router.navigate(["/"]);
      }

      this.snackBar.open(retorno.mensagem, "Fechar");
    }).catch(err => {
      this.snackBar.open(err.error, "Fechar");
    });
  }

  armazenarImagens(imagens : FileList) {    
    this.imagens = imagens;
  }

  atualizarTitulo(novoTitulo) {
    this.titulo = novoTitulo;
  }

  atualizarTexto(novoTexto) {
    this.texto = novoTexto;
  }

  atualizarLink(novoLink) {
    this.link = novoLink;
  }
}
