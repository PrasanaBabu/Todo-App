import {Component, Input, OnInit} from '@angular/core';
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todoInput!: Todo  ;

  completed!: boolean;
  ngOnInit(): void {
  }


  constructor(private todoService: TodoService ) {
  }

  isFavorite(){
    console.log("fav btn clicked!!")
    this.todoInput.isFavorite = !this.todoInput.isFavorite;
    if (this.todoInput.isFavorite) {
      this.showFavStatusToast("Added To fav");

    }
    else {
      this.showFavStatusToast("Removed from fav");
    }
    this.ngOnInit();

  }

  showFavStatusToast(msg: string){
    alert(msg);
  }

  isComplete(){
    this.todoInput.isCompleted = !this.todoInput.isCompleted;
  }

  showCompletedStatusToast(){}

  showDeletedToast(){}

  deleteTodo(todoToDelete: Todo) {
    this.todoService.deleteTodoById(todoToDelete.id);
    this.ngOnInit();
  }

  onChange() {
    console.log("clicked completed checkbox");
    this.completed = !this.completed
    this.isComplete();
    this.completed ? alert("completed"): '';
  }

  toggleClass() {
    if (this.completed)
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
    return '';
  }
}
