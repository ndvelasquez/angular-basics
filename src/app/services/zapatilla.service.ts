import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {

  public zapatillas: Array<Zapatilla>;
  constructor() {
    this.zapatillas = [
      new Zapatilla('Futsal', 'Reebok', 'Negro', 55, true),
      new Zapatilla('Mercurial', 'Addidas' , 'Verde' , 100, true),
      new Zapatilla('Predator', 'Addidas' , 'Azul' , 100, true),
      new Zapatilla('Air', 'Nike' , 'Negro' , 100, false),
      new Zapatilla('Total 90', 'Nike' , 'Verde' , 100, true),
    ];
  }

  getTexto() {
    return 'Texto desde un servicio';
  }

  getZapatillas() {
    return this.zapatillas;
  }
}
