import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user-service';
import { Alert } from '../../reusableComponent/alert/alert';
import { Tabs } from '../../reusableComponent/tabs/tabs';
import { Highlight } from '../../directives/highlight';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe, Alert, Tabs, Highlight],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  userForm: FormGroup = new FormGroup({
    userId: new FormControl(0),
    emailId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    fullName: new FormControl('', [Validators.required]),
    mobileNo: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
  });
  isFormSubmited: boolean = false;
  http = inject(HttpClient);
  userList$: Observable<any[]>;
  userSrv = inject(UserService);
  selectedViewName: string = 'List View';
  constructor() {
    const result = this.userSrv.getAddtionOfTwoNo(22, 33);
    const version = this.userSrv.myAppVersionName;
    this.userList$ = this.http.get<any[]>(
      'https://api.freeprojectapi.com/api/GoalTracker/getAllUsers',
    );
  }

  onSelectTab(tab: string) {
    this.selectedViewName = tab;
  }

  onClear() {
    this.userForm.reset();
  }

  onEdit(data: any) {
    this.userForm = new FormGroup({
      userId: new FormControl(data.userId),
      emailId: new FormControl(data.emailId),
      password: new FormControl(data.password),
      fullName: new FormControl(data.fullName),
      mobileNo: new FormControl(data.mobileNo),
    });
  }

  onSaveUser() {      
    this.isFormSubmited = true;
    if (this.userForm.valid) {
      const formValue = this.userForm.value;
      this.http
        .post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue)
        .subscribe({
          next: (response: any) => {
            alert('User created success');
            this.isFormSubmited = false;
          },
          error: (error: any) => {
            alert(error);
          },
        });
    }
  }
}
