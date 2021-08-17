import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../Services/payment.service';
import {PaymentStatusService} from '../Services/payment-status.service'

@Component({
  selector: 'app-payment-status-component',
  templateUrl: './payment-status-component.component.html',
  styleUrls: ['./payment-status-component.component.css']
})
export class PaymentStatusComponentComponent implements OnInit {
  result: any = [];

  constructor(private PaymentService: PaymentService) { }

  ngOnInit(): void {
    this.getPaymentStatusCode();
  }

  getPaymentStatusCode() {
    this.PaymentService.getPaymentStatusCode().subscribe(
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
