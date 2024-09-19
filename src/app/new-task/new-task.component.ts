import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../tasks/task/task.model';
import { TaskService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',

  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter();
  @Output() add = new EventEmitter<NewTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  taskService = inject(TaskService);
  cancelTask() {
    this.cancel.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        dueDate: this.enteredDate,
        summary: this.enteredSummary,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
