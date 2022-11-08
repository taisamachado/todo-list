import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {
  
  //@Output, sempre que o emmitItemTaskList tiver algo novo adicionado, ele vai mitir para os outros componentes que estão utilizando ele para pegar o valor
  @Output() public emitItemTaskList = new EventEmitter();

  public addItemTaskList: string ="";

  constructor() { }

  ngOnInit(): void {
  }

  //função para adicionar itens
  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim(); //não deixa adicionar valor vazio como apertando a tecla espaço    
    if(this.addItemTaskList){ //impede adicionar campo vazio, se o input tiver uma string ele adiciona o item
      this.emitItemTaskList.emit(this.addItemTaskList)
      this.addItemTaskList = "";
    }
  }

}
