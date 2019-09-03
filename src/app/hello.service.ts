import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  Hello(name : string) : string
  {
    return "Hello " + name;
  }
  
}
