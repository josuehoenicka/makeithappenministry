import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { BreadcrumbService } from "../services/app.breadcrumb.service";

@Injectable({
  providedIn: "root",
})
export class BreadcrumbInitializedGuard {
  constructor(private breadcrumbService: BreadcrumbService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const crumbs = route.data["crumbs"];
    this.breadcrumbService.setCrumbs(crumbs);
    return true;
  }
}
