import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountCardComponent } from './mount-card.component';

describe('MountCardComponent', () => {
  let component: MountCardComponent;
  let fixture: ComponentFixture<MountCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
