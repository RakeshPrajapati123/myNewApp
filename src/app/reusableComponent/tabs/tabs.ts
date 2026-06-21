import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
})
export class Tabs implements OnInit {
  @Input() tabList: string[] = [];
  @Input() activeTab: string = '';
  @Output() tabSelected = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onTabSelect(tab: string): void {
    this.activeTab = tab;
    this.tabSelected.emit(tab);
  }
}
