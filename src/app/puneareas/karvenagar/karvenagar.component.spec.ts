import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarvenagarComponent } from './karvenagar.component';

describe('KarvenagarComponent', () => {
  let component: KarvenagarComponent;
  let fixture: ComponentFixture<KarvenagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KarvenagarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KarvenagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
