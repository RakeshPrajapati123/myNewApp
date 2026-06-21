import { Routes } from '@angular/router';
import { Counter } from './components//counter/counter';
import { Todo } from './components/todo/todo';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { signal } from '@angular/core';
import { ControlFlow } from './components/control-flow/control-flow';
import { Attribute } from './components/attribute/attribute';
import { Photos } from './components/photos/photos';
import { provideRouter, withRouterConfig } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: Counter },
  { path: 'todo', component: Todo },
  { path:'admin', component: Admin },
  { path: 'user', component: User},
  { path: 'databinding', component: DataBinding},
  {path: 'signal', component: Signal},
  {path: 'control-flow', component: ControlFlow},
  {path: 'attribute', component: Attribute},
  {path: 'photos', component: Photos}
  

  
];




