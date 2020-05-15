import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Compra } from '../compra/models/compra';
import { CompraService } from '../services/compra.service';
import { ActivatedRoute } from '@angular/router';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  formGroup: FormGroup;
  compra: Compra;
  _id: string;
  _ide: string;public _nombreCliente:string;public _ruta:string;public _valor:string;public _idCompra:string;
  _mensaje:string;
  constructor(
    private compraServise: CompraService,
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private modalService: NgbModal,
    private clienteService: ClienteService) {

  }

  

  ngOnInit() {
    
    this.buildForm();
    this._id = this._route.snapshot.params.nombre;
    this.compraServise.getId(this._id).subscribe(p => {
      if (p != null) {
        this.PintarInput(p);
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Compra Encontrado!!! :)';
      }
    });
  }

  private PintarInput(compra1: Compra) {
    this._nombreCliente = compra1.nombreCliente;
    this._ruta = compra1.ruta;
    this._valor = compra1.valor;
    this._idCompra = compra1.idCompra;
    
  }

  private buildForm() {
    this.compra = new Compra();
    this.compra.nombreCliente = '';
    this.formGroup = this.formBuilder.group({
      idCompra:this._ide,
      nombre: [this.compra.nombreCliente, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm', centered: true });
  }


  getId(texto:string) {
    this._ide=texto;
    
    this.compra = this.formGroup.value;
    this.compraServise.getId(texto).subscribe(p => {
      if (p != null) {
        this._mensaje= "Cliente encontrado :DDD";
        this._nombreCliente=p.nombreCliente;
        const messageBox = this.modalService.open(this.openSm)
        this.compra = p;
      } else {
        this._mensaje= 'Cliente No Encontrado!!! :o';
        this._nombreCliente="";
        const messageBox = this.modalService.open(this.openSm)
        this.compra = p;
      }

    })
  }

  get control() { return this.formGroup.controls; }



}
