import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentStatusComponentComponent } from './payment-status-component.component';

describe('PaymentStatusComponentComponent', () => {
  let component: PaymentStatusComponentComponent;
  let fixture: ComponentFixture<PaymentStatusComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentStatusComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentStatusComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
