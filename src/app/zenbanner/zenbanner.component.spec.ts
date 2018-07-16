import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenbannerComponent } from './zenbanner.component';

describe('ZenbannerComponent', () => {
  let component: ZenbannerComponent;
  let fixture: ComponentFixture<ZenbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
