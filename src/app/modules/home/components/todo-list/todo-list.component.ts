import { Component, DoCheck, OnInit } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  //<TaskList = Interface 
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }

  //**ngOnInit não estava sendo usado entao trocamos pelo DoCheck
  // ngOnInit(): void {
  // }

  ngDoCheck(){

    this.setLocalStorage();
    
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false}); //push adiciona o item ao campo do checklist
  }

  
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você realmente deseja deletar tudo?")
    if(confirm){
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task vazia, deletar?");

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort( (first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
