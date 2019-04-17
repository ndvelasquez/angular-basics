import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Component ({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html'
})

export class ZapatillasComponent implements OnInit {
  public titulo: string;
  public zapatillas: Array<Zapatilla>;
  public marcasDeZapatillas: string[];
  public pruebaColor: string;
  public usuarioMarca: string;
  constructor() {
    this.marcasDeZapatillas = new Array();
    this.titulo = 'Componente de Zapatillas';
    this.pruebaColor = 'green';
    this.usuarioMarca = 'Fila';
    this.zapatillas = [
      new Zapatilla('Futsal', 'Reebok', 'Negro', 55, true),
      new Zapatilla('Mercurial', 'Addidas' , 'Verde' , 100, true),
      new Zapatilla('Predator', 'Addidas' , 'Azul' , 100, true),
      new Zapatilla('Air', 'Nike' , 'Negro' , 100, false),
      new Zapatilla('Total 90', 'Nike' , 'Verde' , 100, true),
    ];
  }
  ngOnInit() {
    console.log(this.zapatillas);
    this.getMarcas();
  }
  getMarcas() {
// tslint:disable-next-line: max-line-length
    // Obtengo todos los elementos del array de zapatillas para buscar las marcas que hay e introducirlas en un nuevo array con las marcas de las zapatillas
    this.zapatillas.forEach((zapatilla, index) => {
      if (this.marcasDeZapatillas.indexOf(zapatilla.marca) < 0) {
        this.marcasDeZapatillas.push(zapatilla.marca);
      }
      console.log(index);
    });
    console.log(this.marcasDeZapatillas);
  }
  getMarca() {
    alert(this.usuarioMarca);
  }
  addMarca() {
    this.marcasDeZapatillas.push(this.usuarioMarca);
  }
  borrarMarca(indice: any) {
    this.marcasDeZapatillas.splice(indice, 1);
  }
}
