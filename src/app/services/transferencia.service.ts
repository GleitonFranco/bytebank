import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencias: any[];

  constructor() {
    this.listaTransferencias = [];
  }

  transferir(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencias.push(transferencia);
  }

  private hidratar(transferencia: any): void {
    // transferencia = {...transferencia, data: new Date()};
    transferencia.data = new Date();
  }

  get transferencias() {
    return this.listaTransferencias;
  }

}
