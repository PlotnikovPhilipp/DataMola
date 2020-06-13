import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFooterComponent } from './control-footer.component';

describe('ControlFooterComponent', () => {
  let component: ControlFooterComponent;
  let fixture: ComponentFixture<ControlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
