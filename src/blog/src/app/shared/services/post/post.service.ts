import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RetornoPadrao } from '../../models/retorno-padrao.model';
import { Imagem } from '../../models/imagem.model';
import { Util } from '../../util';
import { environment } from '../../../../environments/environment';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private ROTA_CRIAR_POST = 'post';

  constructor(private httpClient: HttpClient) { }

  criarPost(titulo, texto, imagens: FileList) {
    return new Promise((resolve) => {
      var imagensBaixadas: Imagem[] = new Array<Imagem>();
      var promessas: Array<Promise<void>> = new Array<Promise<void>>();

      for (var indice = 0; indice < imagens.length; indice++) {        
        var promessa = Util.lerDadosImagem(imagens[indice]).then((imagem: Imagem) => {
          imagensBaixadas.push(imagem);
        });

        promessas.push(promessa);
      }

      Promise.all(promessas).then(() => {
        this.httpClient.post(environment.backend + this.ROTA_CRIAR_POST, {
          titulo: titulo,
          texto: texto,
          imagens: imagensBaixadas
        }).subscribe((retorno) => {
          resolve(retorno);
        });
      });
    });
  }
}
