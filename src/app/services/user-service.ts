import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  myAppVersionName: string = "V-001";

  http = inject(HttpClient)

  getAddtionOfTwoNo(num1: number, num2: number) {
    //debugger;
    return num1 + num2;
  }

  // getAllPhotos() {
  //    debugger;
  //   return this.http.get("https://jsonplaceholder.typicode.com/photos")
  // }

  getAllPhotos() {
  return this.http.get<any[]>("https://jsonplaceholder.typicode.com/photos");
}

}