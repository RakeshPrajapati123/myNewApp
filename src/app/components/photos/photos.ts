import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserService } from '../../services/user-service';
import { Admin } from "../admin/admin";
import { Alert } from "../../reusableComponent/alert/alert";
import { Tabs } from '../../reusableComponent/tabs/tabs';
import { PhotoModel } from '../../models/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [CommonModule,FormsModule, JsonPipe, Admin, Alert,Tabs],
  templateUrl: './photos.html',
  styleUrls: ['./photos.css']
})
export class Photos implements OnInit {

  photosList: PhotoModel[] = [];
  http = inject(HttpClient);
  isFormSubmited: boolean = false;
  myTabList: string[]= ['Basic','Project','Family','Contact','Skill']

  constructor(private userSr : UserService) {
    const sum = this.userSr.getAddtionOfTwoNo(44,77);
    //debugger;
  }

  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "",
    "url": "",
    "thumbnailUrl": ""
  }

  
  ngOnInit(): void {
    //debugger;
    this.getAllPhotos();
  }

  getAllPhotos() {
    //debugger;
    
 this.userSr.getAllPhotos().subscribe({
  next: (data: any) => {
    console.log('RAW RESPONSE:', data);
    console.log('IS ARRAY:', Array.isArray(data));

    this.photosList = data.slice(0, 25);

    console.log('FINAL LENGTH:', this.photosList.length);
  },
  error: (err) => {
    console.error(err);
  }
});
}

  

  onSavePhoto(form: NgForm) {
    debugger;
    this.isFormSubmited = true;
    if (form.valid) {
      this.http.post("https://jsonplaceholder.typicode.com/photos", this.newPhoto).subscribe((response: any) => {
        alert("API call Success")
        debugger;
        this.getAllPhotos();
        form.reset();
         this.isFormSubmited = false;
      })
    }

  }

  onUpdatePhoto() {
    this.http.put("https://jsonplaceholder.typicode.com/photos/" + this.newPhoto.id, this.newPhoto).subscribe((response: any) => {
      alert("API call Success")
      debugger;
      this.getAllPhotos();
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure want to Delete");
    if (isDelete == true) {
      this.http.delete("https://jsonplaceholder.typicode.com/photos/" + id).subscribe((response: any) => {
        alert("API call Success")
        debugger;
        this.getAllPhotos();
      })
    }

  }

  onEdit(data: any) {
    this.newPhoto = data;
  }
}