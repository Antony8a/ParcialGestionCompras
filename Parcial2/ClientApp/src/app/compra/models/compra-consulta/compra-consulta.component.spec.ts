import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraConsultaComponent } from './compra-consulta.component';

describe('CompraConsultaComponent', () => {
  let component: CompraConsultaComponent;
  let fixture: ComponentFixture<CompraConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
