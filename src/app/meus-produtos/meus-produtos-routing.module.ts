import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeusProdutosComponent } from './meus-produtos.component';

const routes: Routes = [
  { path: '', component: MeusProdutosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeusProdutosRoutingModule { }
