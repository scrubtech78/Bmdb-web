import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/userLogin';
import { SystemService } from 'src/app/service/system.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  title: string = "User-Login";
  userLogin: UserLogin = new UserLogin();
  message?: string = undefined;

  constructor(private systemSvc: SystemService,private userSvc: UserService, private router: Router) { }

  ngOnInit(): void {

    //invalidate logged in user
    this.systemSvc.loggedInUser = undefined;
    this.userLogin.email ="scrubtech78@yahoo.com";
    this.userLogin.password ="North";
  }
  login(){
    this.userSvc.login(this.userLogin).subscribe({

      next:(resp) =>{
        this.systemSvc.loggedInUser = resp;
        this.router.navigateByUrl('/home');
      },
      error:(err) => {
        console.log(err);
        this.message ='Invalid email/pwd comb. Try Again';
      },
      complete:() =>{}
    })
  }
}
