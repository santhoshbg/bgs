import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartIconComponentComponent } from './cart-icon-component.component';

describe('CartIconComponentComponent', () => {
  let component: CartIconComponentComponent;
  let fixture: ComponentFixture<CartIconComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartIconComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
