import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrls: ['./counter.css']
})
export class Counter {

  count = signal(0);

  increase() {
    this.count.update(v => v + 1);
  }

  decrease() {
    this.count.update(v => v - 1);
  }
}
