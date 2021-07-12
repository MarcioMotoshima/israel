import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './shared/navbar/navbar.module';
import { ModalProdutoComponent } from './meus-produtos/modal-produto/modal-produto.component';
import { ModalConfirmacaoComponent } from './meus-produtos/modal-confirmacao/modal-confirmacao.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({

  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NavbarModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalProdutoComponent,
    ModalConfirmacaoComponent
  ]

})
export class AppModule { }
