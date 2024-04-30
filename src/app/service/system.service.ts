import { Injectable } from "@angular/core";
import { User } from "../model/user";
import { Router } from "@angular/router";


@Injectable({
    providedIn: 'root',
  })
  export class SystemService{
    loggedInUser?: User = undefined;

    constructor(private router: Router){}

   

    checkLogin(): void{


        if(this.loggedInUser == undefined){
            console.log("User not ");
            this.router.navigateByUrl('/user/login');
        }
    }
}