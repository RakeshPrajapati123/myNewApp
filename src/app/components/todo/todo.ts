import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.html',
  styleUrls: ['./todo.css'],
})
export class Todo {
  todoText = signal('');
  todos = signal<string[]>([]);

  // ➕ Add like Counter "+"
  addTodo() {
    const value = this.todoText().trim();

    if (value) {
      this.todos.update((list) => [...list, value]);
      this.todoText.set('');
    }
  }

  // ➖ Remove like Counter "-"
  deleteTodo(index: number) {
    this.todos.update((list) => list.filter((_, i) => i !== index));
  }
}
