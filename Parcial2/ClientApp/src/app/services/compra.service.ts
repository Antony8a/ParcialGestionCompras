import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { Compra } from '../compra/models/compra';
import { tap, catchError }from 'rxjs/operators';

const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }

  getId(id: string): Observable<Compra> {
    const url = `${this.baseUrl + 'api/compra'}/${id}`;
    return this.http.get<Compra>(url, httpOptions)
      .pipe(
        catchError(this.handleErrorService.handleError<Compra>('Buscar Compra', null))
      );
  }

  get(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.baseUrl + 'api/Compra')
      .pipe(
        catchError(this.handleErrorService.handleError<Compra[]>('Consulta compra', null))
      );
  }

  post(Compra: Compra): Observable<Compra> {
    return this.http.post<Compra>(this.baseUrl + 'api/Compra', Compra)
      .pipe(
        catchError(this.handleErrorService.handleError<Compra>('Registrar Compra', null))
      );
  }

}
