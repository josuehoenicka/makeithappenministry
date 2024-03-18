import { BuscarClienteComponent } from "src/app/clientes/components/buscar-cliente/buscar-cliente.component";
import { CargarClientesComponent } from "src/app/clientes/components/cargar-clientes/cargar-clientes.component";
import { ClientesComponent } from "src/app/clientes/components/clientes/clientes.component";
import { BreadcrumbInitializedGuard } from "src/app/helpers/breadcrum-guard.service";
import { Route } from "@angular/router";

export const CLIENTES_ROUTES: Route = {
  path: "clientes",
  component: ClientesComponent,
  canActivate: [BreadcrumbInitializedGuard],
  children: [
    {
      path: "cargar-cliente",
      pathMatch: "full",
      component: CargarClientesComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
          },
          {
            label: "Gestion de Clientes",
          },
          {
            label: "Cargar Clientes",
            routerLink: "/clientes/cargar-cliente",
          },
        ],
      },
    },
    {
      path: "modificar-cliente/:id",
      pathMatch: "full",
      component: CargarClientesComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Modificar Cliente",
            // routerLink: '/clientes/cargar-cliente'
          },
        ],
      },
    },
    {
      path: "eliminar-cliente/:id",
      pathMatch: "full",
      component: CargarClientesComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Eliminar Cliente",
            //   routerLink: '/clientes/cargar-cliente'
          },
        ],
      },
    },
    {
      path: "modificar-cliente",
      pathMatch: "full",
      component: BuscarClienteComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Modificar Clientes",
            routerLink: "/clientes/modificar-cliente",
          },
        ],
      },
    },
    {
      path: "eliminar-cliente",
      pathMatch: "full",
      component: BuscarClienteComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Eliminar Clientes",
            routerLink: "/clientes/eliminar-cliente",
          },
        ],
      },
    },
    {
      path: "gestionar-cuenta-web",
      pathMatch: "full",
      component: BuscarClienteComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Gestionar Cuenta WEB",
            routerLink: "/clientes/gestionar-cuenta-web",
          },
        ],
      },
    },

    {
      path: "ficha-cliente",
      pathMatch: "full",
      component: BuscarClienteComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Ficha Cliente",
            routerLink: "/clientes/modificar-cliente",
          },
        ],
      },
    },
    {
      path: "ficha-cliente/:id",
      pathMatch: "full",
      component: CargarClientesComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
            // routerLink: '/ventas'
          },
          {
            label: "Gestion de Clientes",
            //routerLink: '/ventas/cargar-presupuesto'
          },
          {
            label: "Ficha Cliente",
            // routerLink: '/clientes/cargar-cliente'
          },
        ],
      },
    },

    /* Clientes > Informe de Clientes > Informe Lista de Clientes */
    {
      path: "informe-lista-de-clientes",
      pathMatch: "full",
      component: BuscarClienteComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
          },
          {
            label: "Informe de Clientes",
          },
          {
            label: "Informe Lista de Clientes",
          },
        ],
      },
    },
    {
      path: "informe-lista-de-clientes/:id",
      pathMatch: "full",
      component: CargarClientesComponent,
      canActivate: [BreadcrumbInitializedGuard],
      data: {
        crumbs: [
          {
            label: "Clientes",
          },
          {
            label: "Informe de Clientes",
          },
          {
            label: "Informe Lista de Clientes",
          },
        ],
      },
    }
  ],
};
