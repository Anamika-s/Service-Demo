import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';
 
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {

  constructor() { }
  products: Product[];
  
  LoadProducts()
  {
     this.products = [
{productID: 10 ,name : "Mouse" , price : 1000},
{productID: 11 ,name : "Plotter" , price : 1000},

{productID: 12 ,name : "Scanner" , price : 1000},

{productID: 13 ,name : "Printer" , price : 1000},

{productID: 14 ,name : "Monitor" , price : 1000}

    ];
 
}


GetProducts() : Product[]
{
  console.log("B");
this.LoadProducts();
  console.log("L is "+ this.products.length);
  return this.products;
}
name : string;
prod : Product;
GetProductById(id : number) : Product
{ 
  let products= this.GetProducts();
 
  console.log(id);
  console.log(products.length);
  this.prod= this.products.find(i=> i.productID == id);
  console.log("AAA"+ this.prod);
  return this.prod;

}
Insert(product : Product)
{
  let products= this.GetProducts();
 
  this.products.push(product);
  alert(this.products.length);

}


}