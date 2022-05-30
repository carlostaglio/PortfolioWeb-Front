import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardskillItemComponent } from './hardskill-item.component';

describe('HardskillItemComponent', () => {
  let component: HardskillItemComponent;
  let fixture: ComponentFixture<HardskillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardskillItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardskillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
