import { Injectable } from '@angular/core';
import { Storage } from '../../models/storage.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  obter<T>(chave: string): T {
    if (chave != null) {
      const itemStorage = JSON.parse(localStorage.getItem(chave)) as Storage<T>;

      if (itemStorage != null && itemStorage.expiracao == null) {
        return itemStorage.objeto;
      }

      if (itemStorage == null || new Date(itemStorage.expiracao) <= new Date()) {
        localStorage.setItem(chave, null);
        return null;
      }

      return itemStorage.objeto;
    }

    return null;
  }

  armazenar(chave: string, objeto: any, expiracao: Date = null): void {
    const itemStorage = new Storage();

    itemStorage.objeto = objeto;
    itemStorage.expiracao = expiracao;

    localStorage.setItem(chave, JSON.stringify(itemStorage));
  }
}
