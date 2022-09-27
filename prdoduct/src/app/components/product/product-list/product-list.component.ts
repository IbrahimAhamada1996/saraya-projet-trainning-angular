import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  searchTerm = '';
  products:any =[];
  allProducts:any[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProduct().subscribe(
      data=>{

        this.products = data;
        this.allProducts = this.products;
        console.log(this.allProducts);

    });

  }

  search(name:string){
    this.products = this.allProducts.filter(
      p=>p.name.toLowerCase().includes(name.toLowerCase())
    )
  }

}
