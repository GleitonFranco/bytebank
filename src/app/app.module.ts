import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NovaTransferenciaComponent} from './nova-transferencia/nova-transferencia.component';
import {FormsModule} from "@angular/forms";
import {ExtratoComponent} from './extrato/extrato.component';
import {CommonModule, registerLocaleData} from '@angular/common';

import localePt from '@angular/common/locales/pt';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt'},
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// https://github.com/alura-cursos/1952-angular/tree/aula-7
