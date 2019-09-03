import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  HelloMsg(name : string) : string
  {
    return  "Hello " + name;
  }
  constructor() { }
}
