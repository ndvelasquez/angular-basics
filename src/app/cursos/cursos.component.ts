import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  public frase: string;
  constructor() {
    this.frase = 'Esto es una prueba';

  }

  ngOnInit() {
  }

}
