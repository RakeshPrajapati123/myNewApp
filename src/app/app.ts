import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { Admin } from "./components/admin/admin";
import { User } from "./components/user/user";
import { Counter } from "./counter/counter";
import { DataBinding } from "./components/data-binding/data-binding";
import { Todo } from "./todo/todo";
import { Signal } from "./components/signal/signal";
import { ControlFlow } from "./components/control-flow/control-flow";
import { Attribute } from "./components/attribute/attribute";
import { Photos } from './components/photos/photos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Admin, User, Counter, DataBinding, Todo, Signal, RouterLinkWithHref, ControlFlow, Attribute, Photos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  count = signal(0);

  increase() {
    this.count.update(value => value + 1);
  }

  decrease() {
    this.count.update(value => value - 1);
  }
}
