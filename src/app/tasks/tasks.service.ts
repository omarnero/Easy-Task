import { Injectable } from '@angular/core';
import { NewTask } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  constructor() {
    const task = localStorage.getItem('tasks');

    if (task) {
      this.tasks = JSON.parse(task);
    }
  }
  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(data: NewTask, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: data.title,
      summary: data.summary,
      dueDate: data.dueDate,
    });
    this.saveData();
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveData();
  }
  private saveData() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
