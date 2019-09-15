import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortDescComponent } from './short-desc.component';

describe('ShortDescComponent', () => {
  let component: ShortDescComponent;
  let fixture: ComponentFixture<ShortDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
