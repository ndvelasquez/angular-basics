import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Master de Javascript y Angular';
  public mostrarComponente = true;
  ocultarComponente(value: boolean) {
    this.mostrarComponente = value;
  }
}
