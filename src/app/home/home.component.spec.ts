import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeManagementSystemComponent } from './home';

describe('EmployeeManagementSystemComponent', () => {
  let component: EmployeeManagementSystemComponent;
  let fixture: ComponentFixture<EmployeeManagementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeManagementSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeManagementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
