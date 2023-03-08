import {Component, OnInit} from '@angular/core';
import {Todo} from "../../../model/todo";
import {TodoService} from "../../../services/todo.service";

@Component({
  selector: 'app-fav-todos',
  templateUrl: './fav-todos.component.html',
  styleUrls: ['./fav-todos.component.css']
})
export class FavTodosComponent implements OnInit{
  favTodos: Todo[] = [];
  ngOnInit(): void {
    this.getFavTodos();
  }
  constructor(private service: TodoService) {
  }


  getFavTodos(){
    this.favTodos = this.service.getFavorites();

  }

}
