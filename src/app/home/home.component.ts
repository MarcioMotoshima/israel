import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dadosUsuarioLogado: any
  public nome = ""
  constructor() { }

  ngOnInit(): void {
    let token: any = localStorage.getItem('token')
    this.dadosUsuarioLogado = jwt_decode(token)
    this.nome = this.dadosUsuarioLogado.name
  }

}
