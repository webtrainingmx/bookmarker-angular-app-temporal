import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-error-login',
  templateUrl: './modal-error-login.component.html',
  styleUrls: ['./modal-error-login.component.scss']
})
export class ModalErrorLoginComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ModalErrorLoginComponent>) { }

  ngOnInit() {
  }

}
