import { Component, OnInit } from '@angular/core';
import { TodoService } from './todos.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todosChanged.subscribe((todos: Todo[]) => this.todos = todos);
    this.todoService.fetchTodos();
  }

}
