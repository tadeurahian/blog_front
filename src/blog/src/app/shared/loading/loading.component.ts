import { Component, AfterViewInit } from '@angular/core';
import { LoadingService } from '../services/loading/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit {
  carregando: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngAfterViewInit(): void {    
    this.loadingService.carregando.subscribe((valor: boolean) => this.carregando = valor);
  }
}
