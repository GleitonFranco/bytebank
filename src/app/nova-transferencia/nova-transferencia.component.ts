import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Transfer�ncia transferida!', this.valor, this.destino);
    const transferencia = {valor: this.valor, destino: this.destino};
    this.transferirEv.emit(transferencia);
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino= 0;
  }

}
