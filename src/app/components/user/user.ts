import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  userForm: FormGroup = new FormGroup({
    userid: new FormControl(0),
    emailid: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl(''),
  });

  http = inject(HttpClient);
  userList$: Observable<any[]>;

  constructor() {
    this.userList$ = this.http.get<any[]>(
      'https://api.freeprojectapi.com/api/Goaltracker/getAllUsers',
    );
  }

  onEdit(data: any) {
    this.userForm = new FormGroup({
      userid: new FormControl(data.userid),
      emailid: new FormControl(data.emailid),
      password: new FormControl(data.password),
      fullName: new FormControl(data.fullName),
      mobileNo: new FormControl(data.mobileNo),
    });
  }

  onSaveUser() {
    debugger;

    if (this.userForm.invalid) {
      alert('Form is invalid');
      return;
    }

    const formValue = this.userForm.value;

    this.http.post('https://api.freeprojectapi.com/api/Goaltracker/register', formValue).subscribe({
      next: (response: any) => {
        console.log('Response:', response);
        alert('User created successfully');
      },
      error: (error: any) => {
        console.error('Error:', error);
        alert('Something went wrong');
      },
    });
  }
}
