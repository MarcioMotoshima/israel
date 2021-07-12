import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import jwt_decode from "jwt-decode";

export interface Usuario {
  email: string
  senha: string
}
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public dadosUsuarioLogado: any
  private URL_API = "https://servidor/"
  private email = "pedro.israel@gmail.com"
  private senha = "123456"
  private token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9lIFNhbSJ9.RpYD7qsSX8UvhHeBarSe67yJo-OXU2UNtIvmme0u2vo"
  constructor(
    private http: HttpClient
  ) { }

  //simulacao de uma chamada http
  // public login(usuario: Usuario): Observable<Usuario> {
  //   const httpHeaders = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   return this.http.post<Usuario>(`${this.URL_API}usuario/login`, params, { headers: httpHeaders }).pipe(result => result);
  // }

  async login(usuario: Usuario) {
    if (usuario.email == this.email && usuario.senha == this.senha) {
      return { status: 200, token: this.token }
    } else {
      return { status: 403, token: '' }
    }
  }
  async recuperarDadosToken() {
    let token: any = localStorage.getItem('token')
    this.dadosUsuarioLogado = jwt_decode(token)
    return this.dadosUsuarioLogado
  }
}
