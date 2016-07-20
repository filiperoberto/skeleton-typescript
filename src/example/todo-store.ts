import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./todo-item";

class TodoStore{
    private todos: ITodoItem[];
    public onChange: EventEmitter<any> = new EventEmitter();
    constructor(){
		this.todos = [];
    }
    get():ITodoItem[]{
		return this.todos;
    }
    save(todo:ITodoItem):void{
		todo.id = this.todos.length;
		this.todos.push(todo);
		this.onChange.emit(null);
    }

}

//let todoStore: TodoStore = new TodoStore();
//export = todoStore;
export default new TodoStore();
