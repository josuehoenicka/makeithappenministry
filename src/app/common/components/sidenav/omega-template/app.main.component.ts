import {
  Component,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  OnInit,
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { PrimeNGConfig, SharedModule } from "primeng/api";
import { AppComponent } from "../../../../app.component";
import { Router, Routes, RouterLink, RouterOutlet } from "@angular/router";
import { TokenStorageService } from "../../../interfaces/token-storage.service";
import { AppMenuComponent } from "./app.menu.component";
import { AvatarModule } from "primeng/avatar";
import { TooltipModule } from "primeng/tooltip";
import { ChipModule } from "primeng/chip";
import { TagModule } from "primeng/tag";
import { CardModule } from "primeng/card";
import { FormsModule } from "@angular/forms";
import { AutoCompleteModule } from "primeng/autocomplete";
import { NgClass, NgFor } from "@angular/common";

@Component({
  selector: "app-main",
  templateUrl: "./app.main.component.html",
  styleUrls: ["./app.main.component.css"],
  animations: [
    trigger("submenu", [
      state(
        "hidden",
        style({
          height: "0px",
        })
      ),
      state(
        "visible",
        style({
          height: "*",
        })
      ),
      transition(
        "visible => hidden",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
      transition(
        "hidden => visible",
        animate("400ms cubic-bezier(0.86, 0, 0.07, 1)")
      ),
    ]),
  ],
  standalone: true,
  imports: [
    NgClass,
    AutoCompleteModule,
    FormsModule,
    SharedModule,
    CardModule,
    NgFor,
    TagModule,
    ChipModule,
    TooltipModule,
    RouterLink,
    AvatarModule,
    AppMenuComponent,
    RouterOutlet,
  ],
})

export class AppMainComponent implements AfterViewInit, OnDestroy, OnInit {
  public menuInactiveDesktop!: boolean;

  public menuActiveMobile!: boolean;

  public profileActive!: boolean;

  public topMenuActive!: boolean;

  public topMenuLeaving!: boolean;

  documentClickListener!: () => void;

  menuClick!: boolean;

  topMenuButtonClick!: boolean;

  configActive!: boolean;

  configClick!: boolean;
  username!: string;
  arr_sistema_options: any = [
    {
      empleados: "Empleado 1",
      grupos: ["grupo 1", "grupo 2", "grupo 3", "grupo 4"],
      elementosMenu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    },
    {
      empleados: "Empleado 2",
      grupos: ["grupo 1", "grupo 2", "grupo 3", "grupo 4"],
      elementosMenu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    },
  ];

  storedSistemaOpt: any = [
    {
      empleados: "Empleado 1",
      grupos: ["grupo 1", "grupo 2", "grupo 3", "grupo 4"],
      elementosMenu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    },
    {
      empleados: "Empleado 2",
      grupos: ["grupo 1", "grupo 2", "grupo 3", "grupo 4"],
      elementosMenu: ["Menu 1", "Menu 2", "Menu 3", "Menu 4"],
    },
  ];
  selectedOptSistema!: any;

  constructor(
    public renderer: Renderer2,
    private primengConfig: PrimeNGConfig,
    public app: AppComponent,
    public router: Router,
    public tokenService: TokenStorageService,
  ) {}

  ngOnInit() {
    this.router.navigate(["/dashboard"]);
    this.primengConfig.ripple = true;
  }

  onClickGrupos(e: any, grupo: any) {
    e.preventDefault();
  }
  onClickElementos(e: any, elementosMenu: any) {
    e.preventDefault();
  }

  onAutoCompleteBuscarEnSistema(event: any) {
    let query = [...event.query].join("");
    console.error(query);
    if (query.length >= 3) {
    }
  }


  filterAutoCompleteOpt(event: any) {
    let filtered: any[] = [];
    let query = event.query;

    if (event.query == "") {
      this.arr_sistema_options = this.storedSistemaOpt;
      console.error(this.arr_sistema_options);
    }
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    console.error(event);
    for (let i = 0; i < this.arr_sistema_options.length; i++) {
      let item = this.arr_sistema_options[i];
      if (item.empleados.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(item);
      }
    }

    this.arr_sistema_options = filtered;
  }

  onNavigateToNotif() {
    this.router.navigate(["general/bandeja-de-notificaciones"]);
  }

  ngAfterViewInit() {
    // hides the overlay menu and top menu if outside is clicked
    this.documentClickListener = this.renderer.listen(
      "body",
      "click",
      (event) => {
        if (!this.isDesktop()) {
          if (!this.menuClick) {
            this.menuActiveMobile = false;
          }

          if (!this.topMenuButtonClick) {
            this.hideTopMenu();
          }
        }

        if (this.configActive && !this.configClick) {
          this.configActive = false;
        }

        this.configClick = false;
        this.menuClick = false;
        this.topMenuButtonClick = false;
      }
    );
  }

  toggleMenu(event: Event) {
    this.menuClick = true;
    if (this.isDesktop()) {
      this.menuInactiveDesktop = !this.menuInactiveDesktop;
      if (this.menuInactiveDesktop) {
        this.menuActiveMobile = false;
      }
    } else {
      this.menuActiveMobile = !this.menuActiveMobile;
      if (this.menuActiveMobile) {
        this.menuInactiveDesktop = false;
      }
    }

    if (this.topMenuActive) {
      this.hideTopMenu();
    }

    event.preventDefault();
  }

  toggleProfile(event: Event) {
    this.profileActive = !this.profileActive;
    event.preventDefault();
  }

  toggleTopMenu(event: Event) {
    this.topMenuButtonClick = true;
    this.menuActiveMobile = false;

    if (this.topMenuActive) {
      this.hideTopMenu();
    } else {
      this.topMenuActive = true;
    }

    event.preventDefault();
  }

  hideTopMenu() {
    this.topMenuLeaving = true;
    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 500);
  }

  onMenuClick() {
    this.menuClick = true;
  }

  onRippleChange(event:any) {
    this.app.ripple = event.checked;
    this.primengConfig.ripple = event.checked;
  }

  onConfigClick(event:any) {
    this.configClick = true;
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  onSearchClick() {
    this.topMenuButtonClick = true;
  }

  ngOnDestroy() {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
  }
}
