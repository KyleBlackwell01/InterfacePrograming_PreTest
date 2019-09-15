import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateRunComponent } from './rate-run.component';

describe('RateRunComponent', () => {
  let component: RateRunComponent;
  let fixture: ComponentFixture<RateRunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateRunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
