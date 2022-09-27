import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { apiUrl } from '../../environments/environment';
import { Observable, filter } from 'rxjs';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  userExist: User[]=[];
  users: User[]= [
    {
      id:1,
      username:"ibrahim",
      password:"ibrahim"
    },
    {
      id:1,
      username:"lova",
      password:"lova"
    },
  ];
  constructor(private http:HttpClient) { }

  getUser(){

    return this.users;

  }
  auth(username:string,password:string):boolean{
    this.userExist =  this.users.filter(u=>u.username==username && u.password==password)
    console.log(this.userExist);
    return this.userExist.length>0? true :false;
  }
}
