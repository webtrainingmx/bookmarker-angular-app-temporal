import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErrorLoginComponent } from './modal-error-login.component';

describe('ModalErrorLoginComponent', () => {
  let component: ModalErrorLoginComponent;
  let fixture: ComponentFixture<ModalErrorLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalErrorLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErrorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
