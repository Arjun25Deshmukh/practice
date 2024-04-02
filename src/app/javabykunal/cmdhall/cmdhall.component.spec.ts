import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdhallComponent } from './cmdhall.component';

describe('CmdhallComponent', () => {
  let component: CmdhallComponent;
  let fixture: ComponentFixture<CmdhallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmdhallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CmdhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
