import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusProdutosComponent } from './meus-produtos.component';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';
import { MeusProdutosRoutingModule } from './meus-produtos-routing.module';

import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MeusProdutosService } from './meus-produtos.service';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';

@NgModule({
  declarations: [
    MeusProdutosComponent,
    ModalProdutoComponent,
    ModalConfirmacaoComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MeusProdutosRoutingModule,
    MatIconModule,
    MatToolbarModule,
    NavbarModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSnackBarModule,
    NgxSpinnerModule,
    NgxDropzoneModule
  ],
  providers: [MeusProdutosService]
})
export class MeusProdutosModule { }
