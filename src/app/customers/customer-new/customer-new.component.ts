import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.scss']
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;

  constructor() {}

  ngOnInit() {
    // this.emailFormControl = this.fb.group({
    //   email: ['', [Validators.email, Validators.required]]
    // });
    this.emailFormControl = new FormControl('', [
      Validators.email,
      Validators.required
    ]);
  }
}
