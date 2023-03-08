import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import { FavTodosComponent } from './components/fav-todos/fav-todos/fav-todos.component';

const routes: Routes = [
  {path: 'todos', component:TodoListComponent},
  //{path: 'onePost', component:OnepostComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    NewTodoComponent,
    FavTodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
