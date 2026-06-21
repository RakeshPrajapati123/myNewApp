import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class Admin implements AfterViewInit, OnDestroy, OnInit {
  constructor() {
    console.log('constructor executed')
    //propert initialization
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    //api call
    //subscription
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
