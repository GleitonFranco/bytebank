import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transferencia} from '../model/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = 'localhost:3000/transferencias'
  private listaTransferencias: any[];

  constructor(private http: HttpClient) {
    this.listaTransferencias = [];
  }

  todas(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    return this.http.post<Transferencia>(this.url, transferencia);
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
