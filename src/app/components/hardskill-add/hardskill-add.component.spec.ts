import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardskillAddComponent } from './hardskill-add.component';

describe('HardskillAddComponent', () => {
  let component: HardskillAddComponent;
  let fixture: ComponentFixture<HardskillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardskillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardskillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
