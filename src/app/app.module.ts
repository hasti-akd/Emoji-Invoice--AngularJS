import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HeaderComponent } from './header/header.component';
import { PaymentTypeComponent } from './payment-type/payment-type.component';
import { ItemsComponent } from './items/items.component';
import { TotalsComponent } from './totals/totals.component';


@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    HeaderComponent,
    PaymentTypeComponent,
    ItemsComponent,
    TotalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
