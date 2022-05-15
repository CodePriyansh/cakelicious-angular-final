import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWiseCakeComponent } from './category-wise-cake.component';

describe('CategoryWiseCakeComponent', () => {
  let component: CategoryWiseCakeComponent;
  let fixture: ComponentFixture<CategoryWiseCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryWiseCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWiseCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
