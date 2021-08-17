import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../Services/payment.service';
import {PaymentStatusService} from '../Services/payment-status.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  result: any = [];

  constructor(private paymentStatusservice: PaymentStatusService) { }

  ngOnInit(): void {
    this.getPaymentStatusCode();
  }

  getPaymentStatusCode() {
    this.paymentStatusservice.getPaymentStatusCode().subscribe(
      (res: any) => {
        this.result = res.data[0];
        console.log(this.result);
      },
      (err: any) => {
        alert('Error Occured');
        console.log('err', err);
      }
    );
  }
}
