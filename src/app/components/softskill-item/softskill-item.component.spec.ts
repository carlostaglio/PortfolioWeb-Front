import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskillItemComponent } from './softskill-item.component';

describe('SoftskillItemComponent', () => {
  let component: SoftskillItemComponent;
  let fixture: ComponentFixture<SoftskillItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftskillItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftskillItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
