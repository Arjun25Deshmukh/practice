import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralsecretaryComponent } from './generalsecretary.component';

describe('GeneralsecretaryComponent', () => {
  let component: GeneralsecretaryComponent;
  let fixture: ComponentFixture<GeneralsecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralsecretaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralsecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
