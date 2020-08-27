import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post/post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../../../shared/models/post.model';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Constantes } from 'src/app/shared/constantes';
import { Autenticacao } from 'src/app/shared/models/autenticacao.model';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.scss']
})
export class ListarPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostService,
              private snackBar: MatSnackBar,
              private storage : StorageService) { }

  ngOnInit() {
    this.postsService.obterPosts().subscribe((retorno) => {
      if (retorno.sucesso) {
        this.posts = retorno.resultado;
      } else {
        this.snackBar.open(retorno.mensagem, "Fechar");
      }
    }, err => {
      this.snackBar.open(err.error, "Fechar");
    });
  }

  excluirPost(post : Post, indiceArray : number) {
    var autenticacao = this.storage.obter<Autenticacao>(Constantes.CHAVE_STORAGE_AUTH);

    if(autenticacao.usuario.id != post.idCriador)
      this.snackBar.open("Você apenas pode deletar seus posts!", "Fechar");
    else {
      this.postsService.excluirPost(post.id).subscribe(retorno => {
        if(retorno.sucesso) {
          this.snackBar.open(retorno.mensagem, "Fechar");
          this.removerPost(indiceArray);
        }                  
      }, err => {
        this.snackBar.open(err.error, "Fechar");
      })
    }
  }

  removerPost(indiceArray : number) { 
    if(this.posts.length == 1)
      this.posts = new Array<Post>();
    else   
      this.posts = this.posts.splice(indiceArray, 1);
  }
}
