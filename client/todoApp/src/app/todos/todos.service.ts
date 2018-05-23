import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { Subject } from "rxjs";

@Injectable()
export class TodoService {
    todos: Todo[];
    todosChanged = new Subject<Todo[]>();
    
    constructor(private http: HttpClient) {}

    getTodos() {
        return this.todos.slice();
    }

    setTodos(todos: Todo[]) {
        this.todos = todos;
        this.todosChanged.next(this.todos.slice());
    }

    fetchTodos() {
        this.http.get<Todo[]>('/api/v1/todos')
        .subscribe(
            (todos: Todo[]) => this.setTodos(todos)
        );
    }

}