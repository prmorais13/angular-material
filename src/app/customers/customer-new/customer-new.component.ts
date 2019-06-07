import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

import { MatDialog } from '@angular/material';

import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
  }

  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`User chose ${result}`);
    });
  }
}
