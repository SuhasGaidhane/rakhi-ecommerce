import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySecondComponent } from './category-second.component';

describe('CategorySecondComponent', () => {
  let component: CategorySecondComponent;
  let fixture: ComponentFixture<CategorySecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorySecondComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
