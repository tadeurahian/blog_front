import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';

@Injectable({
    providedIn: 'root'
})
export class LoadingInterceptor implements HttpInterceptor {

    constructor(private loadingService: LoadingService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.exibir();

        return next.handle(req)
            .pipe(
                finalize(() => {                    
                    this.loadingService.esconder()
                })
            );
    }
}
