import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from './todos.service';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  @ViewChild('todoInput') todoInput: ElementRef;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.todosChanged.subscribe((todos: Todo[]) => this.todos = todos);
    this.todoService.fetchTodos();
  }

  onCreate() {
    if (!this.todoInput.nativeElement.value) {
      alert('add text');
    } else {
      this.todoService.addTodo(new Todo(this.todoInput.nativeElement.value, false));
    }
  }

  onDelete(id: number) {
    this.todoService.deleteTodo(id);
  }

}
