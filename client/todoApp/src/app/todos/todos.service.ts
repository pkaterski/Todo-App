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

    addTodo(todo: Todo) {
        this.todos.push(todo);
        this.todosChanged.next(this.todos);
        this.http.post('/api/v1/todos', todo).subscribe(
            () => this.fetchTodos()
        );
    }
    
    deleteTodo(id: number) {
        this.http.delete(`/api/v1/todos/${this.todos[id]._id}`).subscribe(
            () => this.fetchTodos()
        );
        this.todos.splice(id, 1);
        this.todosChanged.next(this.todos);
    }

    fetchTodos() {
        this.http.get<Todo[]>('/api/v1/todos')
        .subscribe(
            (todos: Todo[]) => this.setTodos(todos)
        );
    }

}