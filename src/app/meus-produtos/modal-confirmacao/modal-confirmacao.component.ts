import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal-confirmacao',
  templateUrl: './modal-confirmacao.component.html',
  styleUrls: ['./modal-confirmacao.component.scss']
})
export class ModalConfirmacaoComponent implements OnInit {
  public tipo = "Remover Produto."
  constructor(
    private spinner: NgxSpinnerService,
    private dialogRef: MatDialogRef<ModalConfirmacaoComponent>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
  ) { }

  ngOnInit(): void {
  }

  confirmar() {
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide()
      this.dialogRef.close(true)
    }, 1500);
  }

  fecharModal() {
    this.dialogRef.close(false)
  }

}
