import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OscpComponent } from './oscp.component';

describe('OscpComponent', () => {
  let component: OscpComponent;
  let fixture: ComponentFixture<OscpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OscpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OscpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
