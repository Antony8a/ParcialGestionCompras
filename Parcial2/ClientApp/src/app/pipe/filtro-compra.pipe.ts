import { Pipe, PipeTransform } from '@angular/core';
import { Compra } from '../compra/models/compra';

@Pipe({
  name: 'filtroCompra'
})
export class FiltroCompraPipe implements PipeTransform {

  transform(compra: Compra[],  searchText: string): any {
    if (searchText == null) return compra;
    return compra.filter(p=>p.idCliente.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1 ||
    p.nombreCliente.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1||
    p.ruta.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1||
    p.valor.toString().toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1||
    p.idCompra.toLowerCase()
    .indexOf(searchText.toLowerCase()) !== -1);
  }

}
