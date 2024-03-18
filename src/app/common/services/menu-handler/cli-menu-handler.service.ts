import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CliMenuHandlerService {
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}

  receiveMenu(e: any, menuid: any) {
    switch (e) {
      case 'Cargar Clientes': {
        this.router.navigate(['/clientes/cargar-cliente']);
        break;
      }
      case 'Modificar Cliente': {
        this.router.navigate(['/clientes/modificar-cliente']);
        break;
      }
      case 'Eliminar Cliente': {
        this.router.navigate(['/clientes/eliminar-cliente']);
        break;
      }
      case 'Gestionar Cuenta WEB': {
        this.router.navigate(['/clientes/gestionar-cuenta-web']);
        break;
      }
      case 'Informe Ficha de Cliente': {
        this.router.navigate(['/clientes/ficha-cliente']);
        break;
      }
      case 'Informe Lista de Clientes': {
        this.router.navigate(['/clientes/informe-lista-de-clientes']);
        break;
      }
    }
  }
}
