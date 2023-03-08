import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent implements OnInit{

  todoTitle = '';
  todoDetail = '';

  constructor(private service: TodoService) {
  }
  onSubmit() {
    this.service.addTodoByTitleAndDetail(this.todoTitle, this.todoDetail);

    this.todoTitle = '';
    this.todoDetail = '';
  }

  ngOnInit(): void {
  }
}
