import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenLoginComponent } from './zen-login.component';

describe('ZenLoginComponent', () => {
  let component: ZenLoginComponent;
  let fixture: ComponentFixture<ZenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
