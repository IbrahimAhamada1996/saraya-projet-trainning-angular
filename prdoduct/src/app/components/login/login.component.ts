import { Component, OnInit } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';
import { SecurityService } from '../../services/security.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username='';
  password = '';
  constructor(private securityService:SecurityService,
              private router:Router) { }

  ngOnInit(): void {
  }

  sign(user:any){

    if (!this.securityService.auth(user.value.username,user.value.password)) {
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['home'])
    }
  }

}
