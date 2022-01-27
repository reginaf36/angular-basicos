import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo: string = 'Acumular App';
  numero: number = 10;
  base: number = 5;

  acumular( valor: number ) {
    this.numero += valor;
  }

  /*sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }*/
}
