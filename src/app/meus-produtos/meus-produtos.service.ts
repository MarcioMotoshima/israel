import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Produtos {
  id: number;
  nome: string;
  descricao: string
  preco: number,
  tags: any,
  img: string,
  data_remessa: string
}

@Injectable({
  providedIn: 'root'
})

export class MeusProdutosService {
  private URL_API = "https://servidor/"

  public produtos: Array<Produtos> = [
    {
      id: 11,
      nome: 'MacBook Pro 2021 15"',
      descricao: 'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      preco: 17499.00,
      tags: ['Apple', 'MacBook'],
      img: 'mac04.jpg',
      data_remessa: '2021-05-01'
    },
    {
      id: 12,
      nome: 'MacBook Air 255GB 2020',
      descricao: 'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      preco: 10499.00,
      tags: ['Apple', 'MacBook'],
      img: 'mac04.jpg',
      data_remessa: '2021-06-01'
    },
    {
      id: 13,
      nome: 'MacBook Air 512 GB 2021',
      descricao: 'MacBook Air com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      preco: 13499.00,
      tags: ['Apple', 'MacBook'],
      img: 'mac04.jpg',
      data_remessa: '2021-04-01'
    },
    {
      id: 14,
      nome: 'MacBook Pro 2021 16"',
      descricao: 'MacBook Pro com a melhor tecnologia do mercado, trazendo muita inovação e velocidade.',
      preco: 12499.00,
      tags: ['Apple', 'MacBook'],
      img: 'mac04.jpg',
      data_remessa: '2021-01-01'
    },
  ]
  constructor(
    private http: HttpClient
  ) { }

  //simulacao de uma chamada http
  // public getMeusProdutos(params?: any): Observable<Produtos> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'token': localStorage.getItem('token')
  //   });
  //   return this.http.post<Produtos>(`${this.URL_API}produtos/getMeusProdutos`, params, { headers: httpHeaders }).pipe(result => result);
  // }

  public getMeusProdutos(params?: any) {
    return this.produtos
  }

  public adicionarProdutos(produto: Produtos) {
    this.produtos.push(produto)
  }

  public removerProdutos(produto: Produtos) {
    for (var i = 0; i < this.produtos.length; i++)
      if (this.produtos[i].id == produto.id) {
        this.produtos.splice(i, 1);
        break;
      }
  }

  public editarProdutos(produto: Produtos) {
    let result = this.produtos.find(item => item.id == produto.id)
    if (result) {
      result = produto
    }
  }
}
