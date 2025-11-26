import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sachin } from './sachin';

describe('Sachin', () => {
  let component: Sachin;
  let fixture: ComponentFixture<Sachin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sachin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sachin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
