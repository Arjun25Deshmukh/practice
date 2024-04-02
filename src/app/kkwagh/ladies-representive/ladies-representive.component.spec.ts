import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadiesRepresentiveComponent } from './ladies-representive.component';

describe('LadiesRepresentiveComponent', () => {
  let component: LadiesRepresentiveComponent;
  let fixture: ComponentFixture<LadiesRepresentiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LadiesRepresentiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LadiesRepresentiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
