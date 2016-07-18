export class HelloWorld{
  private name:string;	
  constructor(){
    this.name = "";
  }
  //by convention as the "name" attribute is modified the method to "on" + "attribute name" + "Changed" is called.
  onNameChanged(new_name:string,old_name:string):void{
    (<any>this).refresh();
  }
  showName():void{
    alert(`my name is ${this.name}`);
  }
  attached():void{
	setTimeout(()=>{
			this.name = "change by a settimeout";
			//a reactive update after a time
			//using the "refresh" method, the only injectable method by the library.
			(<any>this).refresh();
	 },4000);
  }
}
