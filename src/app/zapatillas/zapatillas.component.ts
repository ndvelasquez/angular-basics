import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit{
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.titulo = 'Componente de Zapatillas';
    this.zapatillas = [
      new Zapatilla('Mercurial', 'Addidas' , 'Verde' , 100, true),
      new Zapatilla('Predator', 'Addidas' , 'Azul' , 100, true),
      new Zapatilla('Air', 'Nike' , 'Negro' , 100, true),
      new Zapatilla('Total 90', 'Nike' , 'Verde' , 100, true),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
  }
}
