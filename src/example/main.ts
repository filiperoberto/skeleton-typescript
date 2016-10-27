export class MyBasicApp{
    private tittle: string;
    private canChange: boolean;
    constructor(){
	   this.tittle = "ferrugemjs";
    }
    private change():boolean{
		this.canChange = !this.canChange;
		return this.canChange;
    }
}
