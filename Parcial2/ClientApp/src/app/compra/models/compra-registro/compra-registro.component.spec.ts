import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraRegistroComponent } from './compra-registro.component';

describe('CompraRegistroComponent', () => {
  let component: CompraRegistroComponent;
  let fixture: ComponentFixture<CompraRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
