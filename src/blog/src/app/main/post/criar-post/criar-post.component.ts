import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/services/post/post.service';

@Component({
  selector: 'app-criar-post',
  templateUrl: './criar-post.component.html',
  styleUrls: ['./criar-post.component.scss']
})
export class CriarPostComponent implements OnInit {

  titulo : string = '';
  texto : string = '';
  imagens : FileList;

  constructor(private postService : PostService) { }

  ngOnInit(): void {
  }

  criarPost() {
    debugger;

    this.postService.criarPost(this.titulo, this.texto, this.imagens).then(retorno => {
      debugger;
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
}
