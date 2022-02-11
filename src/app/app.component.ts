import {Component} from '@angular/core';
import {TransferenciaService} from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[];

  constructor(private service: TransferenciaService) {
    this.transferencias = service.transferencias;
  }

  transferir(event: any) {
    console.log(event);
    this.service.transferir(event);
  }

}
