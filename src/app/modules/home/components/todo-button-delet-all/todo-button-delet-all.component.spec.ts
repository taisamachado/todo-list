import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButtonDeletAllComponent } from './todo-button-delet-all.component';

describe('TodoButtonDeletAllComponent', () => {
  let component: TodoButtonDeletAllComponent;
  let fixture: ComponentFixture<TodoButtonDeletAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoButtonDeletAllComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoButtonDeletAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
