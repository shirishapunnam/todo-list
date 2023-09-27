import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public Id: number,
    public Description:string,
    public done:boolean,
    public targetDate:Date

  ){}
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  

  todos=[
    new Todo(1,"Java",false,new Date()),
    new Todo(2,"Angular",false,new Date()),
    new Todo(3,"SpringBoot",true,new Date()),

        // {Id:1,Description:'Angular'},
        // {Id:2,Description:'Java'},
        // {Id:3,Description:'SpringBoot'}
    
  ]
  // todo={
  //   Id:1,
  //   Description:'Angular'
  // }
  
  
  
  
  ngOnInit(): void {
    
  }

}
