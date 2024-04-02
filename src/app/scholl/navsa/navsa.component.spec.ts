import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsaComponent } from './navsa.component';

describe('NavsaComponent', () => {
  let component: NavsaComponent;
  let fixture: ComponentFixture<NavsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavsaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
