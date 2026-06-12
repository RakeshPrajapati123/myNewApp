import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [NgClass],
  standalone:true,
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {

  studentList = [

{name:'AAA', city:'Pune', status:true},
{name:'BBB', city:'Indore', status:false},
{name:'CCC', city:'Bhopal', status:true},
{name:'DDD', city:'Jaipur', status:false}

]

}
