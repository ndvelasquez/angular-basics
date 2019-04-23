import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;
  public frase: string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.frase = 'Esto es una prueba';

  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = + params.followers; //coloco el signo de suma para convertir el string del url a number

      if (this.nombre === 'nada') {
        this._router.navigate(['/home']);
      }
    });
  }

  redirigir() {
    this._router.navigate(['/zapatillas']);
  }

}
