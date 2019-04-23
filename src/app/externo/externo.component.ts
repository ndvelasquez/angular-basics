import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {

  public user: any;
  public newUser: any;
  public savedUser: any;
  public userId: any;
  public fecha = new Date();

  constructor(private peticionesService: PeticionesService) {
    this.userId = 2;
    this.newUser = {
      name: '',
      job: ''
    };
  }

  ngOnInit() {
    this.cargaUsuario();
  }

  cargaUsuario() {
    this.user = false;
    this.peticionesService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(error as any);
      }
    );
  }
  onSubmit(form) {
    this.peticionesService.addUser(this.newUser).subscribe(
      result => {
        this.savedUser = result;
        form.reset();
      },
      error => {
        console.log(error as any);
      }
    );
  }
}
