import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass,NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css'
})
export class Attribute {
  studentList = [
    { name:'AAA',city:'Pune', status:true},
    { name:'BBB',city:'Mumbai', status:false},
    { name:'CCC',city:'Pune', status:false},
    { name:'DDD',city:'Nagpur', status:true}
  ];

  themeClass: string = "bg-success";

  textColor = "red";

  myCss: any = {
    'background-color':'blue',
    'color':'white',
    'font-size':'40px'
  }
}