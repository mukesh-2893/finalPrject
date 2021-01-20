import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoDetailsEditComponent } from './ngo-details-edit.component';

describe('NgoDetailsEditComponent', () => {
  let component: NgoDetailsEditComponent;
  let fixture: ComponentFixture<NgoDetailsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoDetailsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
