import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import {By} from "@angular/platform-browser";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
       schemas: [NO_ERRORS_SCHEMA]

     });

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    component.todoInput = {
    title: 'todo 4',
      id: 40,
      detail: 'test4',
      dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
  }
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render date of todo', function () {
    const testTodo =  {
      title: 'todo 4',
      id: 40,
      detail: 'test4',
      dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
    };
    component.todoInput = testTodo;
    fixture.detectChanges();
    let debugElementOfDate = fixture.debugElement.query(By.css('#date'));

    expect(debugElementOfDate.nativeElement.innerHTML).toContain(testTodo.dateOfCreation.getDate());
    expect(debugElementOfDate.nativeElement.innerHTML).toContain(testTodo.dateOfCreation.getFullYear());

  });

  it('should have a checkbox for completed status', function () {
    let checkBoxElement = fixture.debugElement.queryAll(By.css('#complete'));

    console.log("no of checkbox elements = " +checkBoxElement.length);

    expect(checkBoxElement.length).toEqual(1);
  });

  it('should show title of todo', function () {
    const testTodo =  {
      title: 'todo 4',
      id: 40,
      detail: 'test4',
      dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
    };
    component.todoInput = testTodo;
    let titleFieldElements = fixture.debugElement.queryAll(By.css('#titleField'));
    expect(titleFieldElements[0]).toBeDefined();
    fixture.detectChanges();
    expect(titleFieldElements[0].nativeElement.innerHTML).toContain(testTodo.title);
  });

  it('should show detail of todo', function () {
    const testTodo =  {
      title: 'todo 4',
      id: 40,
      detail: 'test4',
      dateOfCreation: new Date(" Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
    };
    component.todoInput = testTodo;
    let detailFieldElements = fixture.debugElement.queryAll(By.css('#detailField'));
    expect(detailFieldElements[0]).toBeDefined();
    fixture.detectChanges();
    expect(detailFieldElements[0].nativeElement.innerHTML).toContain(testTodo.detail);
  });
  it('should show fav icon', function () {
    let debugElementOfFav = fixture.debugElement.queryAll(By.css('#favIcon'));
    expect(debugElementOfFav.length).toEqual(1);

  });
  it('should show delete button', function () {
    let debugElementOfDelete = fixture.debugElement.queryAll(By.css('#deleteButton'));
    expect(debugElementOfDelete.length).toEqual(1);

  });

  it('should change favorite status when isFavorite method called', function () {
    let favoriteStatusAtStart = component.todoInput.isFavorite;
    component.isFavorite();
    let favoriteStatusAfter = component.todoInput.isFavorite;
    expect(favoriteStatusAtStart).toBe(!favoriteStatusAfter);

  });

  it('should change completed status when isComplete method called', function () {
    let completedAtStart = component.todoInput.isCompleted;
    component.isComplete();
    let completedAfter = component.todoInput.isCompleted;
    expect(completedAtStart).toBe(!completedAfter)
  });

});
