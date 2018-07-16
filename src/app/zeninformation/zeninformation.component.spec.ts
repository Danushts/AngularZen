import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeninformationComponent } from './zeninformation.component';

describe('ZeninformationComponent', () => {
  let component: ZeninformationComponent;
  let fixture: ComponentFixture<ZeninformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeninformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeninformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
