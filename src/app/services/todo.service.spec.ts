import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import {Todo} from "../model/todo";

describe('TodoService', () => {
  let service: TodoService;

  let testTodos: Todo[] = [
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
      isFavorite: false
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

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getAll todos ', function () {
    //arrange
    service.todos = testTodos;
    //act
    let allTodosGot = service.getAllTodos();
    for (const todo of allTodosGot) {
      console.log(JSON.stringify(todo) + ' t');
    }
    //assert
    expect(allTodosGot.length).toEqual(testTodos.length);

  });

  // it('should add new todo', function () {
  //   service.todos = testTodos;
  //   let initialLength = testTodos.length;
  //   service.addNewTodo({
  //     title: 'todo 4',
  //     id: 4,
  //     detail: 'test4',
  //     dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
  //     isCompleted: false,
  //     isFavorite: false
  //   })
  //   let allTodosGot = service.getAllTodos();
  //   expect(allTodosGot.length).toEqual(initialLength + 1);
  // });
  it('should add new todo with title and detail alone', function () {
    service.todos = testTodos;
    let initialLength = testTodos.length;
    service.addTodoByTitleAndDetail('todo 5', 'test5');
    let allTodosGot = service.getAllTodos();
    expect(allTodosGot.length).toEqual(initialLength + 1);
  });
;
  it('should delete todo by Id', function () {
    service.todos = testTodos;
    let initialLength = service.todos.length;
    let todoToDelete = testTodos[0];

    service.deleteTodoById(todoToDelete.id);
    let allTodosGot = service.getAllTodos();

    expect(allTodosGot.length).toEqual(initialLength - 1);

    for (const todo of testTodos) {
      expect(todo).not.toEqual(todoToDelete)
    }

  });
  it('should return correct favorites', function () {
    service.todos = testTodos;
    service.addNewTodo({
      title: 'todo 4',
      id: 40,
      detail: 'test4',
      dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
    });
    service.addNewTodo({
      title: 'todo 4',
      id: 400,
      detail: 'test4',
      dateOfCreation: new Date("Fri Dec 08 2019 07:44:57"),
      isCompleted: false,
      isFavorite: true
    });

    let favorites = service.getFavorites();
    expect(favorites.length).toEqual(2);
  });
});
