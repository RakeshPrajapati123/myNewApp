import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { response } from 'express';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit {
  photosList: any[] = [];

  http = inject(HttpClient);
  cd = inject(ChangeDetectorRef); // ✅ important

  newPhoto: any = {
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: '',
  };

  ngOnInit(): void {
    this.getAllPhotos();
  }

  //   getAllPhotos()  {

  // this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe((result: any) => {
  // this.photosList = result;
  //   })
  // }

  getAllPhotos() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe((result) => {
      console.log('API called'); // 🔍 check this

      // this.photosList = result.slice(0, 50);
      this.photosList = result;
      this.cd.detectChanges(); // 🔥 MUST be here
    });
  }

  onSavePhoto() {
    this.http
      .post('https://jsonplaceholder.typicode.com/photos', this.newPhoto)
      .subscribe((response: any) => {
        alert('API Call Success');
        debugger;
        this.getAllPhotos();
      });
  }

  onUpdatePhoto() {
    this.http
      .put('https://jsonplaceholder.typicode.com/photos/'+ this.newPhoto.id, this.newPhoto)
      .subscribe((response: any) => {
        alert('API Call Success');
        debugger;
        this.getAllPhotos();
      });
  }

  onDelete(id: number)  {

const isDelete = confirm("Are you sure to want to delete record");
if(isDelete== true) {
  this.http.delete('https://jsonplaceholder.typicode.com/photos/'+ id)
      .subscribe((response: any) => {
        alert('API Call Success');
        debugger;
        this.getAllPhotos();
      });
    }
  }

  onEdit(data: any) {
    this.newPhoto = data;
  }
}
