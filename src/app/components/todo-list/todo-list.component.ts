import {Component, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  todos: Todo[] = [];

  ngOnInit(): void {
    this.getTodos();
  }

  constructor(private todoService:TodoService) {
  }

  getTodos(){
    this.todos = this.todoService.getAllTodos();
  }
}
