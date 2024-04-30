import { Injectable } from "@angular/core";
import { User } from "../model/user";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
const URL: string = 'http://localhost:8080/api/users';
import { UserLogin } from "../model/userLogin";

@Injectable({
    providedIn: 'root',
  })
export class UserService{
   
    constructor(private http: HttpClient){}
     

    login(userLogin: UserLogin): Observable<User>{
       return this.http.post(URL + '/login', userLogin) as Observable<User>;
    }

     
     }

    

