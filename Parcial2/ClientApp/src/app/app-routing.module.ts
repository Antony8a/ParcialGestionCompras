import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteConsultaComponent } from './cliente/models/cliente-consulta/cliente-consulta.component';
import { ClienteRegistroComponent } from './cliente/models/cliente-registro/cliente-registro.component';
import { Routes, RouterModule } from '@angular/router';
import { CompraRegistroComponent } from './compra/models/compra-registro/compra-registro.component';
import { CompraConsultaComponent } from './compra/models/compra-consulta/compra-consulta.component';

const routes: Routes = [
  { 
  path: 'clienteConsulta',
  component: ClienteConsultaComponent
  },
  {
  path: 'clienteRegistro',
  component: ClienteRegistroComponent
  },
  {
  path: 'compraRegistro',
  component: CompraRegistroComponent
  },
  {
  path: 'compraConsulta',
  component: CompraConsultaComponent
  }

  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
