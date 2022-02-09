import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  valor: number;
  destino: number;

  transferir(transferencia: object) {
    console.log(transferencia);
    this.valor = transferencia['valor'];
    this.destino = transferencia['destino'];
  }

}
