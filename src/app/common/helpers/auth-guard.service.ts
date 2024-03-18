import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { TokenStorageService } from "../interfaces/token-storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(
    public tokenService: TokenStorageService,
    public router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let token = sessionStorage.getItem("token");
    if (this.tokenService.isLoggedIn !== true) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
