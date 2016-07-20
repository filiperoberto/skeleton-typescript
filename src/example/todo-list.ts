import todoStore from "./todo-store";
import {ITodoItem} from "./todo-item";

export class TodoList{
	private titles: string[] = ["teste"];
	constructor(){
		this.titles = [];
		todoStore.onChange.subscribe(()=>{
			this.titles = todoStore.get().map((todo)=>{
				return todo.desc;
			});
			(<any>this).refresh();
		});
	}
	private get todos():ITodoItem[]{
		return todoStore.get();
	}
    private addTitle(title:string):void{
		if (title) {
			//this.titles.push(title);
			todoStore.save({desc:title,done:true});
    	}
    }
}