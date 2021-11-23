import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AsidenavbarComponent } from './asidenavbar.component';

describe('AsidenavbarComponent', () => {
  let component: AsidenavbarComponent;
  let fixture: ComponentFixture<AsidenavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
