import {Component, Input, Output, EventEmitter} from '@angular/core';

import {SpecificationService} from '../services/specification.service';
import {Specification} from '../entities/specification.entity';


@Component({
  selector: 'tasks-selection',
  templateUrl: 'tasks-selection.component.html'
})
export class TasksSelectionComponent {

  @Input("tasks")
  public tasks: any[] = [];

  @Output()
  tasksChange = new EventEmitter();

  public displayTasks: any[] = [];

  public task = '';
  public selectedSpecification: Specification | undefined;
  public allSpecifications: Specification[] = [];


  constructor(private specificationService: SpecificationService) {
  }


  ngOnInit() {
    this.specificationService.findAll().subscribe((specifications: Specification[]) => {
      // @ts-ignore
      this.allSpecifications = specifications.sort((n1, n2) => this.sortSpecifications(n1, n2));
      this.updateList();
    });
  }


  ngOnChanges() {
    this.updateList();
  }


  updateList() {
    // @ts-ignore
    this.displayTasks = this.tasks.map(this.mapIdToDisplayName);
  }

  // @ts-ignore
  sortSpecifications(n1, n2) {
    if (n1.uri > n2.uri) {
      return 1;
    }

    if (n1.uri < n2.uri) {
      return -1;
    }

    if (n1.version > n2.version) {
      return 1;
    }

    if (n1.version < n2.version) {
      return -1;
    }

    return 0;
  }


  mapIdToDisplayName = (task: any) => {
    return {
      'task': task,
      'specification': task.specification.uri + ' ' + task.specification.version,
    };
  }


  addTask() {
    if (this.selectedSpecification == null) {
      return;
    }

    let item = {
      'specification': {
        id: this.selectedSpecification.id,
        uri: this.selectedSpecification.uri,
        version: this.selectedSpecification.version,
      },
      'taskPattern': this.task
    }

    this.tasks.push(item);
    this.tasksChange.emit(this.tasks);

    this.task = '';

    this.updateList();
  }

  removeTask(item: { task: any; }) {
    var index = this.tasks.indexOf(item.task, 0);
    if (index > -1) {
      this.tasks.splice(index, 1);
    }

    this.tasksChange.emit(this.tasks);

    this.updateList();
  }
}
