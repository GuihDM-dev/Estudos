import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContasService {
  api = environment.api;
  endpoint = 'contas';
  constructor(private http: HttpClient) { }

  ListarTodasContas() {
    return this.http.get(`${this.api}/${this.endpoint}/`);
  };

}

export class ClientesService {
  api = environment.api;
  endpoint = 'clientes';
  constructor(private http: HttpClient) { }

  ListarTodosClientes() {
    return this.http.get(`${this.api}/${this.endpoint}/`);
  };
}
