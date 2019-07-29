import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsLoginGuard implements  CanActivate{
  constructor(private router:Router){
    // router: doi tuong chuyen huong trang
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
  UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>{
    //ham se tra ve gia tri true hoac false => true la cho phep vao component, false kiem tra login
    if(localStorage.getItem('userLogin')){
      return true;
    }
    alert('Ban can dang nhap');
    this.router.navigate(['']);
    return false;
  }
}
