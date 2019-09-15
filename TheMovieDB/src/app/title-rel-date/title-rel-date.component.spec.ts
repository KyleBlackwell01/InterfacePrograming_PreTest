import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleRelDateComponent } from './title-rel-date.component';

describe('TitleRelDateComponent', () => {
  let component: TitleRelDateComponent;
  let fixture: ComponentFixture<TitleRelDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleRelDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleRelDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
