import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoworderstatusComponent } from './showorderstatus.component';

describe('ShoworderstatusComponent', () => {
  let component: ShoworderstatusComponent;
  let fixture: ComponentFixture<ShoworderstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoworderstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoworderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
