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
    service.todas().subscribe(transferencias => {
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

  transferir(event: any) {
    console.log(event);
    this.service.transferir(event);
  }

}
