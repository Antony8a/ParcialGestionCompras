import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Compra } from '../compra';
import { CompraService } from 'src/app/services/compra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/alert-modal/alert-modal.component';

@Component({
  selector: 'app-compra-registro',
  templateUrl: './compra-registro.component.html',
  styleUrls: ['./compra-registro.component.css']
})
export class CompraRegistroComponent implements OnInit {
  formGroup: FormGroup;
  compra:Compra;
  constructor(private compraService: CompraService, 
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.compra = new Compra();
    this.compra.idCliente='';
    this.compra.nombreCliente='';
    this.compra.ruta='';
    this.compra.valor='';
    this.compra.idCompra='';
    this.formGroup = this.formBuilder.group({
      idCliente: [this.compra.idCliente, Validators.required],
      nombreCliente: [this.compra.nombreCliente, Validators.required],
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
    
    add() {
      this.compra = this.formGroup.value;
      this.compraService.post(this.compra).subscribe(p => {
        if (p != null) {
          const messageBox = this.modalService.open(AlertModalComponent)
          messageBox.componentInstance.title = "Resultado Operación";
          messageBox.componentInstance.message = 'Cliente creado!!! :)';
          this.compra = p;
        }
      });
  
    }
    get control() { return this.formGroup.controls; }

}
