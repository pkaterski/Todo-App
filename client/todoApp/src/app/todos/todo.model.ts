export class Todo {
    public _id: string;
    public todo: string;
    public isDone: Boolean;

    constructor (_id:string, todo: string, isDone: Boolean) {
        this._id = _id;
        this.todo = todo;
        this.isDone = isDone;
    }
}