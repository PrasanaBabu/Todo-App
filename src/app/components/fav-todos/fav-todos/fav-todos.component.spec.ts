import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTodosComponent } from './fav-todos.component';
import {Todo} from "../../../model/todo";
import {TodoComponent} from "../../todo/todo.component";
import {TodoService} from "../../../services/todo.service";
import {By} from "@angular/platform-browser";

let testTodos: Todo[] = [
  {
    title: 'todo 1',
    id: 1,
    detail: 'test1',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: true
  },
  {
    title: 'todo 2',
    id: 2,
    detail: 'test2',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: true
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
let favTodos: Todo[] = [
  {
    title: 'todo 1',
    id: 1,
    detail: 'test1',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: true
  },
  {
    title: 'todo 2',
    id: 2,
    detail: 'test2',
    dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
    isCompleted: false,
    isFavorite: true
  },

];
describe('FavTodosComponent', () => {
  let component: FavTodosComponent;
  let fixture: ComponentFixture<FavTodosComponent>;
  let mockTodoService: any;
  beforeEach(async () => {
    mockTodoService = jasmine.createSpyObj('TodoService', ['getAllTodos', 'getFavorites']);
    await TestBed.configureTestingModule({
      declarations: [ FavTodosComponent, TodoComponent ],
      providers:[TodoService,{
        provide: TodoService,
        useValue: mockTodoService
      }]
    })
    .compileComponents();
    mockTodoService.getAllTodos.and.returnValue(testTodos);
    mockTodoService.getFavorites.and.returnValue(favTodos);


    fixture = TestBed.createComponent(FavTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct favorites', function () {
    expect(mockTodoService.getFavorites().length).toEqual(2);
  });

  it('should render correct number of todos(only favorites)', function () {
    component.favTodos = favTodos;
    fixture.detectChanges();
    let debugElement = fixture.debugElement.queryAll(By.directive(TodoComponent));
    expect(debugElement.length).toEqual(favTodos.length)
  });

  it('should have  Fav Todos List as H4 element', function () {
    let debugElement = fixture.debugElement.queryAll(By.css('#title'));
    expect(debugElement.length).toEqual(1);
    expect(debugElement[0].nativeElement.innerHTML).toEqual("Fav Todos List");
  });
});
