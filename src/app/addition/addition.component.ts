import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {
  result!:number
  constructor(private http:ServicesService) {}
  ngOnInit(): void {}

  add(val1:any,val2:any)
  {
   
   this.http.addition(val1,val2)
    
   this.result=this.http.value
  }
}

