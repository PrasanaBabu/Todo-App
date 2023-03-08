import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoComponent } from './new-todo.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {By} from "@angular/platform-browser";

describe('NewTodoComponent', () => {
  let component: NewTodoComponent;
  let fixture: ComponentFixture<NewTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTodoComponent ],
      imports: [FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have add new todo as heading', function () {
    let titleElements = fixture.debugElement.queryAll(By.css('#title'));
    expect(titleElements[0].nativeElement.innerHTML).toEqual("ADD NEW TODO");

  });
  it('should have Add Todo Title as placeholder for title input box', function () {
    let titleInputElements = fixture.debugElement.queryAll(By.css('#titleInputBox'));
    let placeholder = titleInputElements[0].nativeElement.placeholder;
    expect(placeholder).toEqual("Add Todo Title . . .");
  });
  it('should have Add Todo Detail as placeholder for detail input box', function () {
    let titleInputElements = fixture.debugElement.queryAll(By.css('#detailInputBox'));
    let placeholder = titleInputElements[0].nativeElement.placeholder;
    expect(placeholder).toEqual("Add Todo Detail . . .");
  });
  it('should have add button', function () {
    let buttonElements = fixture.debugElement.queryAll(By.css('button'));
    expect(buttonElements[0]).toBeDefined();
    expect(buttonElements[0].nativeElement.innerHTML).toEqual(' ADD ')
  });

});
