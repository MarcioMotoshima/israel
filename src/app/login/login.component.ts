import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService, Usuario } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario = {
    email: '',
    senha: ''
  }
  public hide = true
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private spinner: NgxSpinnerService,
    private snackBar: MatSnackBar,
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async logar() {
    if (this.usuario.email == '' || this.usuario.senha == '') {
      this.openSnackBar('Informe o E-mail e Senha')
    } else {
      this.spinner.show()
      let resultado = await this.loginService.login(this.usuario)
      setTimeout(() => {
        this.spinner.hide()
        if (resultado.status == 200) {
          localStorage.setItem('token', resultado.token)
          this.router.navigate(['/home'])

        } else {
          this.openSnackBar('Email ou senha inválidos')
        }
      }, 1500);
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  }

}
