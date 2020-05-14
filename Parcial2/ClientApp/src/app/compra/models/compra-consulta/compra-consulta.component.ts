import { Component, OnInit } from '@angular/core';
import { Compra } from '../compra';
import { CompraService } from 'src/app/services/compra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-compra-consulta',
  templateUrl: './compra-consulta.component.html',
  styleUrls: ['./compra-consulta.component.css']
})
export class CompraConsultaComponent implements OnInit {

  compras:Compra[];
  compra:Compra;
  searchText: string;
  closeResult: string;
  constructor(
    private compraService: CompraService,
    private modalService: NgbModal) { } 

  ngOnInit(): void {
    this.compraService.get().subscribe(result => {
      this.compras = result;
    });
  }

}
