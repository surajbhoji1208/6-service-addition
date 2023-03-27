import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

value:any;

  addition(val1:any,val2:any)
  {
    this.value=parseInt(val1)+parseInt(val2);
   
  }

}
