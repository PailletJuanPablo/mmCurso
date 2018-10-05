import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibirDatosComponent } from './recibir-datos.component';

describe('RecibirDatosComponent', () => {
  let component: RecibirDatosComponent;
  let fixture: ComponentFixture<RecibirDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecibirDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibirDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
