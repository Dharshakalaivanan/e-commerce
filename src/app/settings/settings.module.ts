import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [
    AccountsComponent,
    PaymentsComponent
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
