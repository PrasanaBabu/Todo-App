import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {NewTodoComponent} from "./components/new-todo/new-todo.component";
import {FavTodosComponent} from "./components/fav-todos/fav-todos/fav-todos.component";

const routes: Routes = [
  {path: 'todos', component:TodoListComponent},
  {path: 'new-todo', component:NewTodoComponent},
  {path: 'fav-todos', component: FavTodosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
