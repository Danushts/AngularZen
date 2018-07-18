import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenmenuComponent } from './zenmenu.component';

describe('ZenmenuComponent', () => {
  let component: ZenmenuComponent;
  let fixture: ComponentFixture<ZenmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
