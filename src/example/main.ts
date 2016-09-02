export class MyBasicApp{
	private tittle: string;
	private mexer: boolean;
    constructor(){
	   this.tittle = "ferrugemjs";
    }
    private devoAtualizar():boolean{
		this.mexer = !this.mexer;
		return this.mexer;
    }
}
