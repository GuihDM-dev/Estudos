import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit(): void {
    this.listarTodos();
  }
  listarTodos(){
  this.clienteService.ListarTodosClientes().subscribe((result: any) => {
    this.clientes = result;
    console.log(this.clientes)
  })
  }
}
