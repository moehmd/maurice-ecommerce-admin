import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FooternavbarComponent } from './footernavbar.component';

describe('FooternavbarComponent', () => {
  let component: FooternavbarComponent;
  let fixture: ComponentFixture<FooternavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FooternavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooternavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
