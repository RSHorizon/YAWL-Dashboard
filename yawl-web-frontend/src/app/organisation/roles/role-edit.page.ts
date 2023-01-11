import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {NotifierService} from 'angular-notifier';

import {RoleService} from '../../yawl/resources/services/role.service';
import {Role} from '../../yawl/resources/entities/role.entity';


@Component({
  templateUrl: 'role-edit.page.html'
})
export class RoleEditPage {

  private id: string | undefined;
  public role: Role | undefined;

  public isLoading = true;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService,
    private roleService: RoleService) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params['id']) {
        this.notifierService.notify("error", "No valid id!");
        return;
      }

      this.id = params['id'];
      this.load();
    });
  }


  public load() {
    this.isLoading = true;
    this.roleService.findById(this.id!).subscribe((result) => {
        this.role = result;
        this.isLoading = false;
      },
      (error) => {
        this.notifierService.notify("error", "Could not load role: " + error);
      });
  }


  public save() {
    this.roleService.update(this.role!).subscribe(() => {
        this.notifierService.notify("success", "The role was edited.");
        this.gotoRolePage();
      },
      (error) => {
        this.notifierService.notify("error", "Could not edit role: " + error);
      });
  }


  public cancel() {
    this.gotoRolePage();
  }


  private gotoRolePage() {
    let url = '/role/' + this.id;
    this.router.navigate([url]);
  }

  private gotoRolesPage() {
    let url = '/roles';
    this.router.navigate([url]);
  }

}
