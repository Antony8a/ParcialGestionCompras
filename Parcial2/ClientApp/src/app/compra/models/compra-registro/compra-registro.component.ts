import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Compra } from '../compra';
import { CompraService } from 'src/app/services/compra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra-registro',
  templateUrl: './compra-registro.component.html',
  styleUrls: ['./compra-registro.component.css']
})
export class CompraRegistroComponent implements OnInit {
  formGroup: FormGroup;
  compra: Compra;
  IdCliente_: string;
  _nombreCliente_: string;

  ideRecibidaPorModel: string;

  constructor(private compraService: CompraService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.recibeIdModal();
    
  }

  private buildForm() {
    this.compra = new Compra();
    this.formGroup = this.formBuilder.group({
      idCliente: [this.IdCliente_, Validators.required],
      nombreCliente: [this._nombreCliente_, Validators.required],
      ruta: [this.compra.ruta, Validators.required],
      valor: [this.compra.valor, Validators.required],
      idCompra: [this.compra.idCompra, Validators.required]
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {

      return;

    }
    this.add();
  }

  recibeIdModal() {
    this.ideRecibidaPorModel = this._route.snapshot.params.id;
    this.IdCliente_ = this.ideRecibidaPorModel;

    this.compraService.getId(this.ideRecibidaPorModel).subscribe(p => {
      if (p != null) {
        
        this._nombreCliente_= p.nombreCliente;
        this.buildForm();
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Compra Encontrado!!! :)';

      }
      else {
        this.buildForm();
        
      }
    });
  }


  private PintarInput(compra1: Compra) {

    this._nombreCliente_ = compra1.nombreCliente;

  }

  add() {
    this.compra = this.formGroup.value;
    this.compraService.post(this.compra).subscribe(p => {
      if (p != null) {
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Cliente creado!!! :DDDD ';
        this.compra = p;
      }
    });

  }



  get control() { return this.formGroup.controls; }

}
