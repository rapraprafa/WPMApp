import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WpmtestComponent } from './wpmtest.component';

describe('WpmtestComponent', () => {
  let component: WpmtestComponent;
  let fixture: ComponentFixture<WpmtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WpmtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WpmtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
