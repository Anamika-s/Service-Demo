import { Component, OnInit } from '@angular/core';
import {HelloService} from './hello.service';
import { GetProductsService } from './products.service';
import { Product } from './product';
import {MyService} from './my-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent  implements OnInit{
  msg : string;
  name : string;
  products : Product[];
  product : Product;
  constructor( private MyS : MyService, 
    private hello_service : HelloService, 
    
    private prodService : GetProductsService)
  
{
  }

  Msg : string;
  CallServiceMethod()
  {
    this.Msg= this.MyS.HelloMsg("Ajay");
    alert(this.Msg);
  }
  ngOnInit()
  {

   this. GetProducts();
   console.log("INIT");
   this.GetProduct(11);
   this.Insert(1,'Sheets',10);
   this. GetProducts();
  }

  CallingService()
  {
    this.msg = this.hello_service.Hello(this.name);
  }
  GetProducts() 
  {
    console.log("In A");
    this.products = this.prodService.GetProducts();
    //return this.products;
  }
  GetProduct(id : number)  
  {
    this.product = this.prodService.GetProductById(id);
    //return this.product;
  }
  Insert(id: number , name : string, price : number)
  {
     this.product =  { productID: id, name : name , price: price};
    this.prodService.Insert(this.product);
  }
}
