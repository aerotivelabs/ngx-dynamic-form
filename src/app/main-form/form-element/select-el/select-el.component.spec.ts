import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectElComponent } from './select-el.component';

describe('SelectElComponent', () => {
  let component: SelectElComponent;
  let fixture: ComponentFixture<SelectElComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectElComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectElComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
