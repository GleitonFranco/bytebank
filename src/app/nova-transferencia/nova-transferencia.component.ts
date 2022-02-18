import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TransferenciaService} from '../services/transferencia.service';
import {Transferencia} from '../model/transferencia.model';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  @Output()
  transferirEv = new EventEmitter<object>();

  valor: number = 22;
  destino: number = 2222;

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir() {
    const transferencia: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(transferencia).subscribe(
      t => {
        console.log(t);
        this.limparCampos();
      },
        error => console.log(error)
    );
    // this.transferirEv.emit(transferencia);
  }

  limparCampos() {
    this.valor = 0;
    this.destino= 0;
  }

}
