import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetornoPadrao } from '../../models/retorno-padrao.model';
import { Imagem } from '../../models/imagem.model';
import { Util } from '../../util';
import { environment } from '../../../../environments/environment';
import { of, Observable } from 'rxjs';
import { Post } from '../../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ROTA_POST = 'post';

  constructor(private httpClient: HttpClient) { }

  criarPost(titulo, texto, imagens: FileList, link) {
    return new Promise((resolve, reject) => {
      var imagensBaixadas: Imagem[] = new Array<Imagem>();
      var promessas: Array<Promise<void>> = new Array<Promise<void>>();

      if (imagens != null) {
        for (var indice = 0; indice < imagens.length; indice++) {        
          var promessa = Util.lerDadosImagem(imagens[indice]).then((imagem: Imagem) => {
            imagensBaixadas.push(imagem);
          });
  
          promessas.push(promessa);
        }
      }      

      Promise.all(promessas).then(() => {
        this.httpClient.post(environment.backend + this.ROTA_POST, {
          titulo: titulo,
          texto: texto,
          imagens: imagensBaixadas,
          link: link
        }).subscribe((retorno) => {
          resolve(retorno);
        }, err => {
          reject(err);
        });
      });
    });
  }

  obterPosts() : Observable<RetornoPadrao<Post[]>> {
    return this.httpClient.get<RetornoPadrao<Post[]>>(environment.backend + this.ROTA_POST);
  }

  excluirPost(idPost) : Observable<RetornoPadrao<string>> {
    return this.httpClient.delete<RetornoPadrao<string>>(environment.backend + this.ROTA_POST + "/" + idPost);
  }
}
