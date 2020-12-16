import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTermsDialogComponent } from './form-terms-dialog.component';

describe('FormTermsDialogComponent', () => {
  let component: FormTermsDialogComponent;
  let fixture: ComponentFixture<FormTermsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTermsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTermsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
