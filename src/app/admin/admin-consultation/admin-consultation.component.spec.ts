import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsultationComponent } from './admin-consultation.component';

describe('AdminConsultationComponent', () => {
  let component: AdminConsultationComponent;
  let fixture: ComponentFixture<AdminConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
