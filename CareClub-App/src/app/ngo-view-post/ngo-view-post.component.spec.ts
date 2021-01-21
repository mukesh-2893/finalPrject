import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoViewPostComponent } from './ngo-view-post.component';

describe('NgoViewPostComponent', () => {
  let component: NgoViewPostComponent;
  let fixture: ComponentFixture<NgoViewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoViewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoViewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
