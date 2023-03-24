import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from '../models/board.model';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
})
export class KanbanBoardComponent {
  board: Board = new Board('Kanban Board', [
    new Column('To Do', ['Task1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']),
    new Column('In Progress', ['Task 6', 'Task 7', 'Task 8']),
    new Column('Ready For Test', ['Task 10', 'Task 11']),
    new Column('Testing', ['Task 12', 'Task 13']),
    new Column('Done', ['Task 14', 'Task 15']),
  ]);
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
  ngOnInit() {}
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
