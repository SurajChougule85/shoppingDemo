import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  productId:string | null=null;
  product:Product={} as Product;

  constructor(private activeRoute:ActivatedRoute , private service:ProductServiceService){}


  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param) =>{
      this.productId=param.get('productId');
    });
    if(this.productId){
      this.service.getProduct(this.productId).subscribe((data:Product) =>{
        this.product=data;
      })
    }
  }

}
