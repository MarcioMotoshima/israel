import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MeusProdutosService, Produtos } from './meus-produtos.service';
import { ModalConfirmacaoComponent } from './modal-confirmacao/modal-confirmacao.component';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';

@Component({
  selector: 'app-meus-produtos',
  templateUrl: './meus-produtos.component.html',
  styleUrls: ['./meus-produtos.component.scss']
})

export class MeusProdutosComponent implements OnInit {
  public produtos: any
  constructor(
    private apiService: MeusProdutosService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarProdutos()
  }
  //simulacao de uma chamada a uma api real
  // async carragarProdutos() {
  //   this.apiService.getMeusProdutos().subscribe(result => {
  //     this.produtos = result.produtos
  //   }, error => {
  //     console.log(error)
  //   })
  // }

  carregarProdutos() {
    this.produtos = this.apiService.getMeusProdutos()
  }

  abrirProduto(produto?: Produtos) {
    if (produto) {
      const dialogRef = this.dialog.open(ModalProdutoComponent, {
        panelClass: 'app-full-bleed-dialog',
        width: '500px',
        maxHeight: '100vh',
        data: produto
      });
    } else {
      const dialogRef = this.dialog.open(ModalProdutoComponent, {
        panelClass: 'app-full-bleed-dialog',
        width: '500px',
        maxHeight: '100vh',
      });
    }
  }

  excluirProduto(produto: Produtos) {
    const dialogRef = this.dialog.open(ModalConfirmacaoComponent, {
      panelClass: 'app-full-bleed-dialog',
      width: '500px',
      data: produto
    });
    dialogRef.afterClosed().subscribe(result => {
      result ? this.apiService.removerProdutos(produto) : undefined
    });
  }

}
