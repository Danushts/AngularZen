import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgerrorsComponent } from './rgerrors.component';

describe('RgerrorsComponent', () => {
  let component: RgerrorsComponent;
  let fixture: ComponentFixture<RgerrorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgerrorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgerrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
