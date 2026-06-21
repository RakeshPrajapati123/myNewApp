import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css'
})
export class ControlFlow {


  selectedCaste: string = '';

  isStudentActive  = signal<boolean>(true);

  changeStatus(value: boolean) {
    this.isStudentActive.set(value)
  }

  cityList = ["Pune","Nagpur","Mumbai","Solapur"];

  studentList = [
    { name:'AAA',city:'Pune', status:true},
    { name:'BBB',city:'Mumbai', status:false},
    { name:'CCC',city:'Pune', status:false},
    { name:'DDD',city:'Nagpur', status:true}
  ]
}