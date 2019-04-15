import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado: string;
  constructor() {
    this.titulo = 'Componente de videojuego';
    this.listado = 'Listado de videojuegos al azar';
  }
  ngOnInit() {
    console.log('OnInit Ejecutado');
  }
  ngDoCheck() {
    console.log('DoCheck Ejecutado');
  }
  ngOnDestroy() {
    console.log('OnDestroy Ejecutado');
  }
   cambiaTitulo() {
    this.titulo = 'Titulo del componente cambiado';
  }
}
