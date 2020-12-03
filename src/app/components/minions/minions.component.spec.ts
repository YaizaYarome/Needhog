import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionsComponent } from './minions.component';

describe('MinionsComponent', () => {
  let component: MinionsComponent;
  let fixture: ComponentFixture<MinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
