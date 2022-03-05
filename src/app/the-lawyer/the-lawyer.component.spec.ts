import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLawyerComponent } from './the-lawyer.component';

describe('TheLawyerComponent', () => {
  let component: TheLawyerComponent;
  let fixture: ComponentFixture<TheLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
