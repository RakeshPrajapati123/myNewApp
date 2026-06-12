import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isActive } from '@angular/router';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

courseName: string = "Angular 20"

isActive: boolean = false;

currentDate: Date = new Date();

rollNo: Number = 222;

minTestLength = 5;

spanClassName = 'secondary'



onCityChanged():void

{
  alert('City changed');
}

constructor() {

console.log(this.courseName);

this.courseName = "Angualr 20 Tutorial"

console.log(this.courseName);


}

showAlert()

{
  console.log("Clicked");
  alert("Welcome to Angular 20");
}

}
