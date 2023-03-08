import { Injectable } from '@angular/core';
import {Todo} from "../model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   fav:Todo[] = [];

   todos: Todo[] = [
     {
       title: 'todo 1',
       id: 1,
       detail: 'test1',
       dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
       isCompleted: false,
       isFavorite: false
     },
     {
       title: 'todo 2',
       id: 2,
       detail: 'test2',
       dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
       isCompleted: false,
       isFavorite: true
     },
     {
       title: 'todo 3',
       id: 3,
       detail: 'test3',
       dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
       isCompleted: false,
       isFavorite: false
     }
   ];
  constructor() { }

  getAllTodos(){
    return this.todos;
  }
  addNewTodo(todo: Todo){
    this.todos.push(todo);
  }

  addTodoByTitleAndDetail(title: string, detail: string){
    let todo = this.setInitialTodoDetails(title, detail);
    this.addNewTodo(todo);
  }

  private setInitialTodoDetails(title: string, detail: string) {
    let todo: Todo = {
      title: title,
      detail: detail,
      id: this.todos.length + 2,
      isFavorite: false,
      isCompleted: false,
      dateOfCreation: new Date(Date())
    }
    return todo;
  }

  deleteTodoById(id: number){
    let todoToDelete!: Todo;
    for (const todo of this.todos) {
      if (todo.id == id)
        todoToDelete = todo;
    };
    this.todos.splice(this.todos.indexOf(todoToDelete), 1);
  }

  getFavorites(){
     this.fav = this.todos.filter((todo) => todo.isFavorite);
    return this.fav;
  }
}

