import { Component, signal } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  selectedCaste: string ='';
  isStudentActive = signal<boolean>(false);

  changeStatus(value: boolean) {
  this.isStudentActive.set(value);
}

cityList = ["Pune", "Nagpur","Mumbai"];

studentList = [

{name:'AAA', city:'Pune', status:true},
{name:'BBB', city:'Indore', status:true},
{name:'CCC', city:'Bhopal', status:true},
{name:'DDD', city:'Jaipur', status:true}

]
  
}
