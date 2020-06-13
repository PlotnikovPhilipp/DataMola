import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowItemComponent } from './window-item.component';

describe('WindowItemComponent', () => {
  let component: WindowItemComponent;
  let fixture: ComponentFixture<WindowItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
