import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Compra } from '../compra/models/compra';
import { CompraService } from '../services/compra.service';
import { ActivatedRoute } from '@angular/router';
import { AlertModalComponent } from '../@base/alert-modal/alert-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  formGroup: FormGroup;
  compra: Compra;
  _nombre:string;
  
  constructor(private compraServise: CompraService, private formBuilder: FormBuilder,private _route: ActivatedRoute,private modalService: NgbModal) { }
  
  ngOnInit() {
    this.buildForm();
    this._nombre = this._route.snapshot.params.nombre;
      this.compraServise.getNombre(this._nombre).subscribe(p => {
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
    this.getNombre();
  }

  getNombre(){
    this.compra = this.formGroup.value;
    this.compraServise.getNombre(this.compra.nombreCliente).subscribe(p=>{
      if(p != null){
        alert('La compra no existe');
        this.compra=p;
      }
    })
  }

  get control() { return this.formGroup.controls; }

}
