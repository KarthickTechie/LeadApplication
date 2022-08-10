import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaddetailsComponent } from './leaddetails.component';

describe('LeaddetailsComponent', () => {
  let component: LeaddetailsComponent;
  let fixture: ComponentFixture<LeaddetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaddetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
