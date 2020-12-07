import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinionCardComponent } from './minion-card.component';

describe('MinionCardComponent', () => {
  let component: MinionCardComponent;
  let fixture: ComponentFixture<MinionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinionCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
