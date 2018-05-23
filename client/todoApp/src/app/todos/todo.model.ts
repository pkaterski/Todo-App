export class Todo {
    public _id: string;
    public todo: string;
    public isDone: Boolean;

    constructor (todo: string, isDone: Boolean) {
        this.todo = todo;
        this.isDone = isDone;
    }
}