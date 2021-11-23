import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSubmittedComponent } from './orders-submitted.component';

describe('OrdersSubmittedComponent', () => {
  let component: OrdersSubmittedComponent;
  let fixture: ComponentFixture<OrdersSubmittedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersSubmittedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
