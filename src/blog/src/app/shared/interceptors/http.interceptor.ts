import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
} from '@angular/common/http';
import { Observable } from "rxjs";
import { StorageService } from "../services/storage/storage.service";
import { Constantes } from "../constantes";
import { Autenticacao } from '../models/autenticacao.model';


@Injectable()
export class BlogHttpInterceptor implements HttpInterceptor {
    constructor(private storage: StorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var usuario = this.storage.obter<Autenticacao>(Constantes.CHAVE_STORAGE_AUTH); 
        
        if(!usuario)
            return next.handle(req);

        const novaRequisicao = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + usuario.token),
        });

        return next.handle(novaRequisicao);
    }
}