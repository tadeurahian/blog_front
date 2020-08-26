import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  carregando = new Subject<boolean>();

  exibir() {    
    this.chavearLoading(true);
  }

  esconder() {
    this.chavearLoading(false);
  }

  chavearLoading(valor : boolean) {  
    this.carregando.next(valor);
  }
}
