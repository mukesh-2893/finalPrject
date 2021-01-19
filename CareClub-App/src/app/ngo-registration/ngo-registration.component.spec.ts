import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NGORegistrationComponent } from './ngo-registration.component';

describe('NGORegistrationComponent', () => {
  let component: NGORegistrationComponent;
  let fixture: ComponentFixture<NGORegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NGORegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NGORegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
