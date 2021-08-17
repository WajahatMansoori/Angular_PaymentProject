
import { Injectable, Inject, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  //private _APIHOST: any = 'http://localhost:8080/';
  private _APIHOST: any = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // public getPaymentStatus() {
  //   let httpHeaders = new HttpHeaders();
  //   let body: any = {};
  //   let parameters = new HttpParams();
  //   return this.http.get(`http://localhost:3000/paymentstatus/GetPaymentStatus`, {
  //     headers: httpHeaders,
  //     params: parameters,
  //   });
  // }
  public getPaymentStatusCode() {
    let httpHeaders = new HttpHeaders();
    let body: any = {};
    let parameters = new HttpParams();
    return this.http.get(`http://localhost:3000/paymentstatus/GetPaymentStatus`, {
      headers: httpHeaders,
      params: parameters,
    });
  }
}
