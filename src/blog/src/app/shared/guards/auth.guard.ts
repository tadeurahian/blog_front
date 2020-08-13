import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage/storage.service";
import { Constantes } from "../constantes";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private storage : StorageService,
              private router : Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    var usuario = this.storage.obter(Constantes.CHAVE_STORAGE_AUTH);

    if(usuario != null) {
      return true
    } else {
      return this.router.createUrlTree(["/login"]);
    }    
  }
}