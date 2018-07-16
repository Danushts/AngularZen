import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenMenuComponent } from './zen-menu.component';

describe('ZenMenuComponent', () => {
  let component: ZenMenuComponent;
  let fixture: ComponentFixture<ZenMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
