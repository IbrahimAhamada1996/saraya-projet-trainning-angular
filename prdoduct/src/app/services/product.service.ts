import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { apiUrl } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProduct():Observable<Product>{
    return this.http.get<Product>(apiUrl+"products").pipe();
  }

  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(apiUrl+"products/"+id).pipe();
  }

  addProduct(product:Product){
     return this.http.post(apiUrl+"products",product);
  }

}
