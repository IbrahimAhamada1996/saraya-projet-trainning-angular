import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Investor } from '../model/investor';
import { apiUrl } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  constructor(private http:HttpClient) { }

  getAllInvestors():Observable<Investor>{
    return this.http.get<Investor>(apiUrl+"investors").pipe()
  }


}
