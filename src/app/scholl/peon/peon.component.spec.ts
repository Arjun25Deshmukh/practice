import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeonComponent } from './peon.component';

describe('PeonComponent', () => {
  let component: PeonComponent;
  let fixture: ComponentFixture<PeonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
