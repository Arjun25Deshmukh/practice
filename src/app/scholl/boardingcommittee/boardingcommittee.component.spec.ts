import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingcommitteeComponent } from './boardingcommittee.component';

describe('BoardingcommitteeComponent', () => {
  let component: BoardingcommitteeComponent;
  let fixture: ComponentFixture<BoardingcommitteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardingcommitteeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardingcommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
