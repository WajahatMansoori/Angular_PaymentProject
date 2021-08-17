import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentService } from './Services/payment.service';
import { PaymentStatusComponentComponent } from './payment-status-component/payment-status-component.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentStatusComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
