import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,

  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTask: boolean = false;
  constructor(private taskService: TaskService) {}
  get selectdUserTask() {
    return this.taskService.getUserTask(this.userId);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
  onCancelTask() {
    this.isAddingTask = false;
  }
}
