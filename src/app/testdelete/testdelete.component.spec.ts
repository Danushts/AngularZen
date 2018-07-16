import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestdeleteComponent } from './testdelete.component';

describe('TestdeleteComponent', () => {
  let component: TestdeleteComponent;
  let fixture: ComponentFixture<TestdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
