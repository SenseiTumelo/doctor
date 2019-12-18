import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConsultationsComponent } from './my-consultations.component';

describe('MyConsultationsComponent', () => {
  let component: MyConsultationsComponent;
  let fixture: ComponentFixture<MyConsultationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyConsultationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyConsultationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
