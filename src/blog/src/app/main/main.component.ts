import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../shared/services/storage/storage.service';
import { Constantes } from '../shared/constantes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router : Router,
              private storage : StorageService) { }

  ngOnInit(): void {
  }

  navegarParaTelaDeCriarPosts() {
    this.router.navigate(["/posts/criar"]);
  }

  deslogar() {
    this.storage.armazenar(Constantes.CHAVE_STORAGE_AUTH, null);
    this.router.navigate(['login']);
  }
}
