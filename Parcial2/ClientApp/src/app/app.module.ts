import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ClienteRegistroComponent } from './cliente/models/cliente-registro/cliente-registro.component';
import { ClienteConsultaComponent } from './cliente/models/cliente-consulta/cliente-consulta.component';
import { CompraRegistroComponent } from './compra/models/compra-registro/compra-registro.component';
import { CompraConsultaComponent } from './compra/models/compra-consulta/compra-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import { FiltroCompraPipe } from './pipe/filtro-compra.pipe';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { CompraService } from './services/compra.service';
import { ClienteService } from './services/cliente.service';
import { FiltroCompra2Pipe } from './pipe/filtro-compra2.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ClienteRegistroComponent,
    ClienteConsultaComponent,
    CompraRegistroComponent,
    CompraConsultaComponent,
    FiltroCompraPipe,
    AlertModalComponent,
    FiltroCompra2Pipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
