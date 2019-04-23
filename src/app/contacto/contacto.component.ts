import { Component, OnInit } from '@angular/core';
import { UsuarioContacto } from '../models/usuario.contacto';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contactoUsuario: UsuarioContacto;
  constructor() {
    this.contactoUsuario = new UsuarioContacto('', '', '');
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.contactoUsuario);
  }

}
