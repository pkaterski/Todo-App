export class Todo {
    public _id: string;
    public todo: string;
    public isDone: Boolean;

    constructor (todo: string, isDone: Boolean, _id?: string) {
        this.todo = todo;
        this.isDone = isDone;
        this._id = _id;
    }
}