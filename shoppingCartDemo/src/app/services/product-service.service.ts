import { Injectable } from '@angular/core';
import{ HttpClient, HttpErrorResponse }  from '@angular/common/http';
import { Product } from '../models/Product';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private baseUrl:string='http://localhost:4000';

  constructor(private httpClient:HttpClient) { }

  public getAllProducts():Observable<Product[]>{
    let dataUrl:string=`${this.baseUrl}/products`;
    return this.httpClient.get<Product[]>(dataUrl).pipe(catchError(this.handleError))
}

public getProduct(productId:string):Observable<Product>{
  let dataUrl:string=`${this.baseUrl}/products/${productId}`;
 return this.httpClient.get<Product>(dataUrl).pipe(catchError(this.handleError));

}

// Error solve
public handleError(error:HttpErrorResponse){
  let errorMsg:string="";
  if(error.error instanceof ErrorEvent){
    // Client error
    errorMsg=`Error :${error.error.message}`
  }else{
    //server side error
    errorMsg=`Status : ${error.status} \n Message: ${error.message}`;
  }
  return throwError(errorMsg);
}

}
