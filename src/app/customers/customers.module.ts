import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';

@NgModule({
  declarations: [CustomerListComponent, CustomerCardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    // Material módulos
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class CustomersModule {}
