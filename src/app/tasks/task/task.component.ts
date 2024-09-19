import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';

import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-task',

  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private taskService: TaskService) {}
  completeTask() {
    this.taskService.removeTask(this.task.id);
  }
}
