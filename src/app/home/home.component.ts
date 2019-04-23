import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public identificar: boolean;
  constructor() {
    this.identificar = false;
  }

  ngOnInit() {
  }

  setIdentificacion(identificacion: boolean) {
    if (identificacion === false) {
      this.identificar = true;
    } else {
      this.identificar = false;
    }
  }

}
