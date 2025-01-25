import { Component, inject, OnInit } from '@angular/core';
import { TODO_STORE } from './store/todo.store';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  todoStore = inject(TODO_STORE);

  ngOnInit(): void {
      // this.loadTodos();
  }

  async loadTodos(){
    await this.todoStore.getAllTodos();
  }
}
