import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { AppComponent } from "src/app/app.component";

import { AppMainComponent } from "./app.main.component";

@Component({
  selector: "app-config",
  template: ` <a
    style="cursor: pointer"
    id="layout-config-button"
    class="layout-config-button"
    (click)="onConfigButtonClick($event)"
  >
    <i class="pi pi-cog"></i>
  </a>`,
  standalone: true,
})
export class AppConfigComponent implements OnInit {
  /*Presupuesto */
  presuConf = false;
  presuMultiSelBind;
  selectedLista;
  columnsNames: any[] = [
    { columna: "Nº" },
    { columna: "Cod.Int" },
    { columna: "Cod.Prv" },
    { columna: "Descripciòn" },
    { columna: "Precio" },
    { columna: "Descuento" },
    { columna: "Recargo" },
    { columna: "Precio Unidad Descuento" },
    { columna: "AlicIva" },
    { columna: "Precio Unidad Iva" },
    { columna: "Cantidad" },
    { columna: "PT Sin IVA" },
    { columna: "Total IVA" },
    { columna: "Fecha" },
    { columna: "Total" },
  ];
  /*Presupuesto End */
  constructor(
    public app: AppComponent,
    public appMain: AppMainComponent,
    //  public configService:UtilsConfigService,
    public activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const activeRouteId = this.activeRoute.snapshot.routeConfig.path;
    console.log(activeRouteId);
    /* Presupuesto */
    if (activeRouteId === "cargar-presupuesto") {
      this.presuConf = true;
    }
  }
  onConfigButtonClick(event) {
    this.appMain.configActive = !this.appMain.configActive;
    this.appMain.configClick = true;
    event.preventDefault();
  }
  /*Presupuesto */
  onChangeListaropdown(e) {
    console.log(e.value);
    let listaObj = {
      cloCatalogoId: e.value.cloCatalogoId,
      cloNombre: e.value.cloNombre,
    };
    // this.configService.setPresupuesto(listaObj, listaObj.cloCatalogoId);
    // this.presupuesto.controls['prsListaArray'].setValue(listaObj);
    // this.listaId = listaObj.cloCatalogoId;
  }
  showImportDialog(position: string) {
    console.log("here");
    let configImportDIalog = true;
    //  this.configService.setPresupuesto('', '', position, configImportDIalog);
  }
  onShowColumns(event) {
    let showColumns = event.value;
    // this.configService.setPresupuesto('', '', '', '', showColumns);
    // console.log(event.value);
    // console.log(this.multiSelectElement);
    //  this.showColumns = event.value;
    // console.log(this.showColumns);
  }
  /*Presupuesto END */
}
