import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SettingsnavbarComponent } from './settingsnavbar.component';

describe('SettingsnavbarComponent', () => {
  let component: SettingsnavbarComponent;
  let fixture: ComponentFixture<SettingsnavbarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
