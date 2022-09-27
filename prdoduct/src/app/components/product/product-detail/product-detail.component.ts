import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:string='';
  product!:Product;
  constructor(private productService:ProductService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.id = this.activeRoute.snapshot.params['id'];
     this.productService.getProduct(this.id).subscribe(response=>{
       this.product=response;
        console.log(response);
     })
  }

}
