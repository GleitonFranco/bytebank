import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number = 22;
  destino: number = 2222;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('transferido!', this.valor, this.destino);
  }

}
