import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsFooter } from './goals-footer';

describe('GoalsFooter', () => {
  let component: GoalsFooter;
  let fixture: ComponentFixture<GoalsFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalsFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalsFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
