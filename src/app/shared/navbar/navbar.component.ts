import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public nome = "Pedro Israel"
  public dadosUsuario = { id: '', name: '' }
  constructor() { }

  ngOnInit(): void {
    let token: any = localStorage.getItem('token')
    this.dadosUsuario = jwt_decode(token)
    this.nome = this.dadosUsuario.name
  }

}
