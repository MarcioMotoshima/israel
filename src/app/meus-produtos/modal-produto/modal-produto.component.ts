import { Component, Inject, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { MeusProdutosService, Produtos } from '../meus-produtos.service';
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
declare var require: any;
const moment = require('moment');

@Component({
  selector: 'app-modal-produto',
  templateUrl: './modal-produto.component.html',
  styleUrls: ['./modal-produto.component.scss'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-PT'
    }
  ]
})
export class ModalProdutoComponent implements OnInit {
  public tipo: string = ''
  public produto = {
    id: 0,
    nome: '',
    descricao: '',
    preco: 0,
    tags: [],
    img: 'mac04.jpg',
    data_remessa: ''
  }
  public imagem = {
    imagem: undefined,
    arquivo: undefined,
  }
  public tags = ""
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private apiService: MeusProdutosService,
    private spinner: NgxSpinnerService,
    private dialogRef: MatDialogRef<ModalProdutoComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public dados: any,
  ) { }

  ngOnInit(): void {
    this.tratarInicio()
  }

  tratarInicio(): void {
    if (this.dados) {
      this.tipo = "Editar Produto."
      this.produto = this.dados
      if (this.produto.tags.length > 0) {
        let tags = ""
        for (let [i, tag] of this.produto.tags.entries()) {
          i < (this.produto.tags.length - 1) ? tags = tags + tag + ", " : tags = tags + tag
        }
        this.tags = tags
      }
      this.imagem.imagem = this.dados.img
    } else {
      this.tipo = "Novo Produto."
    }
  }

  pegararquivo(event: any, arrasto: number): void {
    if (arrasto == 0) {
      this.imagem.imagem = event.target.files[0].name;
      this.imagem.arquivo = event.target.files[0];
    } else {
      this.imagem.imagem = event.addedFiles[0].name;
      this.imagem.arquivo = event.addedFiles[0];
    }
  }

  cadastro(): void {
    if (this.produto.id) {
      this.spinner.show()
      this.tratarTags()
      this.apiService.editarProdutos(this.produto)
      setTimeout(() => {
        this.spinner.hide()
        this.dialogRef.close()
      }, 1500);
    } else {
      this.tratarTags()
      let verificarCampos: any = this.validarCampos(this.produto)
      if (verificarCampos.res) {
        this.spinner.show()
        this.produto.id = Math.floor(Math.random() * 10);
        this.produto.data_remessa = moment(this.produto.data_remessa).format('YYYY-MM-DD')
        this.apiService.adicionarProdutos(this.produto)
        setTimeout(() => {
          this.spinner.hide()
          this.dialogRef.close()
        }, 1500);
      } else {
        this.openSnackBar(verificarCampos.message)
      }
    }
  }

  tratarTags(): void {
    if (this.tags.length > 1) {
      let tags: any = this.tags.split(",")
      this.produto.tags = tags
    } else {
      this.produto.tags = []
    }
  }

  validarCampos(produto: Produtos) {
    let resposta = { res: true, message: "" }
    produto.nome != "" ? produto.nome = produto.nome.trim() : resposta = { res: false, message: "Preencha o nome" }
    produto.descricao != "" ? produto.descricao = produto.descricao.trim() : resposta = { res: false, message: "Preencha a descrição" }
    produto.preco != 0 ? produto.preco = Number(String(produto.preco).replace(',', '.')) : resposta = { res: false, message: "Preencha a preço" }
    return resposta
  }

  removerArquivo(): void {
    this.imagem.imagem = undefined
    this.imagem.arquivo = undefined
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }

  fecharModal(): void {
    this.dialogRef.close()
  }

}
