import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/services/post/post.service';
import { Post } from 'src/app/shared/models/post.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxGalleryImage, NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-listar-posts',
  templateUrl: './listar-posts.component.html',
  styleUrls: ['./listar-posts.component.scss']
})
export class ListarPostsComponent implements OnInit {

  posts: Post[] = [];

  configuracoesGaleria = [{
    fullWidth: true,
    imageDescription: false,
    thumbnails: false,
    preview: false,    
    arrowPrevIcon: 'fa fa-chevron-left fa-2x',
    arrowNextIcon: 'fa fa-chevron-right fa-2x',
    imageAnimation: NgxGalleryAnimation.Slide,
    imageSwipe: true
  }];

  constructor(private postsService: PostService,
    private snackBar: MatSnackBar,) { }

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

  obterImagens(imagens: string[]): NgxGalleryImage[] {
    var imagensNgx = new Array<NgxGalleryImage>();    

    imagens.forEach(imagem => {
      imagensNgx.push({
        small: imagem,
        medium: imagem,
        big: imagem
      });
    });

    return imagensNgx;
  }
}
