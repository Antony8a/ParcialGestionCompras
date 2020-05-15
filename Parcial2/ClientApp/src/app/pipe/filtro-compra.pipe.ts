import { Pipe, PipeTransform } from '@angular/core';
import { Compra } from '../compra/models/compra';

@Pipe({
  name: 'filtroCompra'
})
export class FiltroCompraPipe implements PipeTransform {

  transform(compra: Compra[], searchText: string): any {
    console.log(compra); console.log(searchText);
    if (searchText == null) return compra;
    return compra.filter(p =>
      p.idCliente.toLowerCase()
        .includes(searchText.toLowerCase()) ||
      p.nombreCliente.toLowerCase()
        .includes(searchText.toLowerCase()) ||
        p.ruta.toLowerCase()
          .includes(searchText.toLowerCase()));
  }
}
