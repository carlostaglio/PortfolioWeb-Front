import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftskillAddComponent } from './softskill-add.component';

describe('SoftskillAddComponent', () => {
  let component: SoftskillAddComponent;
  let fixture: ComponentFixture<SoftskillAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftskillAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftskillAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
