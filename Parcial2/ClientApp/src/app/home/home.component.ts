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
  _id:string;
  _ide:string;
  constructor(
    private compraServise: CompraService, 
    private formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private modalService: NgbModal,
    private clienteService: ClienteService ) 
    {
     
    }
  
  ngOnInit() {
    this.buildForm();
    this._id = this._route.snapshot.params.nombre;
      this.compraServise.getId(this._id).subscribe(p => {
        if (p != null) {        
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Compra Encontrado!!! :)';
        }
      });

      
  }
  private buildForm() {
    this.compra = new Compra();
    this.compra.nombreCliente='';
    this.formGroup = this.formBuilder.group({
      nombre:[this.compra.nombreCliente, Validators.required],
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
  }

  

  getId(_ide){
    this.compra = this.formGroup.value;
    this.compraServise.getId(_ide).subscribe(p=>{
      if(p != null){
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message=_ide;
        this.compra=p;
      }else{
        const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Cliente No Encontrado!!! :)';
        this.compra=p;
      }
      
    })
  }

  get control() { return this.formGroup.controls; }

  

}
