import { DashboardComponent } from "../../../dashboard/dashboard/dashboard.component";
import { Route } from "@angular/router";
import { BreadcrumbInitializedGuard } from "../../helpers/breadcrum-guard.service";

export const DASHBOARD_ROUTES: Route = {
  path: "dashboard",
  component: DashboardComponent,
  canActivate: [BreadcrumbInitializedGuard],
  data: {
    crumbs: [
      {
        label: "Dashboard",
        routerLink: "/dashboard",
      },
    ],
  },
  children: [
  ],
};
