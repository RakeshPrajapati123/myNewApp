import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NaPipe } from '../../pipes/na-pipe';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule,UpperCasePipe,LowerCasePipe,TitleCasePipe
    ,SlicePipe,DatePipe, JsonPipe, NaPipe
  ],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  //string , number, booelan, date 
  courseName: string = "angular 20 autorial";
  rollNoList: number []= [11,12,13,14,15,16,17,18];

  isActive: boolean= false;
  currentDate: Date = new Date();

  rollNo: number =  222;

  minTestLength  = 12;
  spanClassName = 'secondary';

  studentObj: any = {
    name:'Chetan', 
    state: '',
    contact: {
      pContactNo: null,
      email:'chetan@gmaiol.cpom'
    }
  }


  constructor() {
    console.log(this.courseName);
    setTimeout(() => {
      this.currentDate = new Date();
    }, 5000);

    setTimeout(() => {
      this.studentObj.city = "Mumbai"
    }, 10000);
    //this.courseName = "Angular 20 Tutorial";
    console.log(this.courseName);

    setTimeout(() => {
      this.rollNo =  7777;
    }, 10000); 
  }

  showAlert(pama?:string) {
    alert("Welcome to Angular 20")
  }

  onCityChanged():void {
    alert('City Chnaged')
  }

  addTwoNum(num1: number,num2: number) : number{
    return num1+ num2;
  }

  onWindowSizeChange() {
    console.log("Window Size has chnaged")
  }

  onMoudeEnter() {
    console.log("Mouese in")
  }
}