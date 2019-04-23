import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';

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
  constructor(private zapatillaService: ZapatillaService) {
    this.marcasDeZapatillas = new Array();
    this.titulo = 'Componente de Zapatillas';
    this.pruebaColor = 'green';
    this.usuarioMarca = 'Fila';
  }
  ngOnInit() {
    this.zapatillas = this.zapatillaService.getZapatillas();
    // alert(this.zapatillaService.getTexto());
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
