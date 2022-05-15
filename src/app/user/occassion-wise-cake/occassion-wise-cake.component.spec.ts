import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccassionWiseCakeComponent } from './occassion-wise-cake.component';

describe('OccassionWiseCakeComponent', () => {
  let component: OccassionWiseCakeComponent;
  let fixture: ComponentFixture<OccassionWiseCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccassionWiseCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccassionWiseCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
