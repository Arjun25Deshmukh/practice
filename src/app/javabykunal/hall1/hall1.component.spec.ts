import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hall1Component } from './hall1.component';

describe('Hall1Component', () => {
  let component: Hall1Component;
  let fixture: ComponentFixture<Hall1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Hall1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Hall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
