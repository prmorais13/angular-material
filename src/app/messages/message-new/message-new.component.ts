import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-new',
  templateUrl: './message-new.component.html',
  styleUrls: ['./message-new.component.scss']
})
export class MessageNewComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities: string[] = ['Alta', 'Média', 'Baixa'];
  departaments: object[] = [
    {
      id: 1,
      name: 'Vestuário'
    },
    {
      id: 2,
      name: 'Esportes'
    },
    {
      id: 3,
      name: 'Cama e mesa'
    }
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      emailCtrl: ['', [Validators.required]]
    });

    this.secondFormGroup = this.formBuilder.group({
      messageCtrl: ['', [Validators.required]]
    });
  }
}
