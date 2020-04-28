import { Component, OnInit } from '@angular/core';
import {TaskModel} from "../../models/TaskModel";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taskForm: FormGroup;
  tasks: TaskModel[] = [];

  constructor(private formBuilder: FormBuilder) {

    const localTasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasks = localTasks ? localTasks : [];

    this.taskForm = formBuilder.group({
      id: ['', [Validators.required, Validators.pattern('[1-9]+')]],
      title: ['', Validators.required],
      body: ['', Validators.required],
      type: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  addTask() {
    let obj = new TaskModel();
    obj.id = this.taskForm.controls.id.value;
    obj.title = this.taskForm.controls.title.value;
    obj.body = this.taskForm.controls.body.value;
    obj.type = this.taskForm.controls.type.value;
    // this.tasks[this.tasks.length].id = this.taskForm.controls.id.value;
    // this.tasks[this.tasks.length].title = this.taskForm.controls.title.value;
    this.tasks.push(obj);
    console.log(this.tasks);

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
