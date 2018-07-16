import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenfooterComponent } from './zenfooter.component';

describe('ZenfooterComponent', () => {
  let component: ZenfooterComponent;
  let fixture: ComponentFixture<ZenfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
