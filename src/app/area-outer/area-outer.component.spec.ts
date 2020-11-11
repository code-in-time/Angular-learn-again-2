import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOuterComponent } from './area-outer.component';

describe('AreaOuterComponent', () => {
  let component: AreaOuterComponent;
  let fixture: ComponentFixture<AreaOuterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaOuterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOuterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
