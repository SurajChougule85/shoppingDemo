import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  public products:Product[]=[];
  public errorMsg:string | null=null;


  constructor(private service:ProductServiceService){}

  ngOnInit(): void {
   
    this.service.getAllProducts().subscribe((data:Product[]) =>{
      this.products=data;
    })
  }


   
}
