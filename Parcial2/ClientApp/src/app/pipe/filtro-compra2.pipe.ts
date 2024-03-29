import { Pipe, PipeTransform } from '@angular/core';
import { Compra } from '../compra/models/compra';

@Pipe({
  name: 'filtroCompra2'
})
export class FiltroCompra2Pipe implements PipeTransform {

 

  transform(compra: Compra[], searchText: string): any {
    console.log(compra);
    console.log(searchText);
    if (searchText == null) return compra;
      return compra.filter(p => p.idCliente.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    
  }

}
