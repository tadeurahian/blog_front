import { TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [StorageService]
  }));

  it('deve ser criado', inject([StorageService], (service: StorageService) => {
    expect(service).toBeTruthy();
  }));

  it('#obter se chave for null deve retornar null', inject([StorageService], (service: StorageService) => {
    const chave = null;

    expect(service.obter(chave)).toBeNull();
  }));

  it('#obter valor do storage expirado', inject([StorageService], (service: StorageService) => {
    const chave = 'teste_storage_expirado';
    const objeto = 'teste';
    const expiracao = new Date();

    expiracao.setDate(expiracao.getDate() - 1);

    service.armazenar(chave, objeto, expiracao);

    const retorno: string = service.obter<string>(chave);

    expect(retorno).toBeNull();
  }));

  it('#obter valor do storage com chave invalida', inject([StorageService], (service: StorageService) => {
    const chave = 'teste_storage_chave_invalida';
    const objeto = 'teste';
    const expiracao = new Date();

    expiracao.setDate(expiracao.getDate() + 1);

    service.armazenar(chave, objeto, expiracao);

    const retorno: string = service.obter<string>(chave + '2');

    expect(retorno).toBeNull();
  }));

  it('#obter valor salvo no storage com data de expiracao valida', inject([StorageService], (service: StorageService) => {
    const chave = 'teste_storage_sucesso';
    const objeto = 'teste';
    const expiracao = new Date();

    expiracao.setDate(expiracao.getDate() + 1);

    service.armazenar(chave, objeto, expiracao);

    const retorno: string = service.obter<string>(chave);

    expect(retorno).toEqual(objeto);
  }));
});
