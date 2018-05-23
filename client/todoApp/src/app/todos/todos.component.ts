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
  editMode: Boolean = false;
  editedItem: number;
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
      this.todoInput.nativeElement.value = '';
    }
  }

  onDelete(index: number) {
    if (confirm('Are you shure you want to delete "' + this.todos[index].todo + '"?'))
      this.todoService.deleteTodo(index);
  }

  onUpdateStatus(index: number) {
    let newTodo = new Todo(this.todos[index].todo, !this.todos[index].isDone, this.todos[index]._id);
    this.todoService.updateTodo(index, newTodo);
  }

  onEdit(index: number) {
    this.editMode = true;
    this.editedItem = index;
  }

  onUpdateText(event) {
    if (event.which === 13) {
      if (event.target.value) {
        let newTodo = new Todo(event.target.value, this.todos[this.editedItem].isDone, this.todos[this.editedItem]._id);
        this.todoService.updateTodo(this.editedItem, newTodo);
        this.editMode = false;
      } else {
        this.editMode = false;
      }
    }
  }

}
