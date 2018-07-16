import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcontainerComponent } from './productcontainer.component';

describe('ProductcontainerComponent', () => {
  let component: ProductcontainerComponent;
  let fixture: ComponentFixture<ProductcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
