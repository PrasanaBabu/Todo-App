import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import {TodoComponent} from "../todo/todo.component";
import {By} from "@angular/platform-browser";
import {Todo} from "../../model/todo";
import {TodoService} from "../../services/todo.service";

let testTodos: Todo[] = [
  {
    title: 'todo 1',
    id: 1,
    detail: 'test1',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: false
  },
  {
    title: 'todo 2',
    id: 2,
    detail: 'test2',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: false
  },
  {
    title: 'todo 3',
    id: 3,
    detail: 'test3',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: false
  }
];


describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let mockTodoService: any;
  beforeEach( () => {
    mockTodoService = jasmine.createSpyObj('TodoService', ['getAllTodos']);
    TestBed.configureTestingModule({
      declarations: [ TodoListComponent, TodoComponent ],
       providers:[TodoService,{
        provide: TodoService,
         useValue: mockTodoService
       }]
    });

    mockTodoService.getAllTodos.and.returnValue(testTodos);

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should use todo component to render each todo', function () {
    component.todos = testTodos;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.query(By.directive(TodoComponent));

    //console.error(debugElement);

    let todoComponent = debugElement.componentInstance;
    expect(todoComponent).toBeDefined();
  });

  it('should set todos from service directly', function () {
    expect(component.todos.length).toBe(testTodos.length);
  });

  it('should render correct number of todo components', function () {
    component.todos = testTodos;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.queryAll(By.directive(TodoComponent));
    expect(debugElement.length).toEqual(testTodos.length)
  });


});
