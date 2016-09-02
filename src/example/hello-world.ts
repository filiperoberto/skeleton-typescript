export class HelloWorld{
  private name:string;	
  constructor(){
    this.name = "guess";
  }
  //by convention as the "name" attribute is modified the method to "on" + "attribute name" + "Changed" is called.
  onNameChanged(new_name:string,old_name:string):void{
    console.log(`${old_name} --> ${new_name}`);
  }
  updateName():void{
    this.name = "my new name is test!";
    (<any>this).refresh();
  }
  attached():void{
  }
}
