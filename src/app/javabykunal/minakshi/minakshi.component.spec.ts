import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinakshiComponent } from './minakshi.component';

describe('MinakshiComponent', () => {
  let component: MinakshiComponent;
  let fixture: ComponentFixture<MinakshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MinakshiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinakshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
